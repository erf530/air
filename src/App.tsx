import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import { css } from 'styled-components/macro';
import people from './data/MOCK_DATA.json';
import { Search } from '../src/components/Search/Search';
import { PeopleList } from '../src/components/PeopleList/PeopleList';

const container = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 320px;
  text-align: left;
`;

const searchContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const header = css`
  font-family: Georgia;
  font-size: 40px;
  font-weight: normal;
  line-height: 110%;
  letter-spacing: 0.03em;
  color: #102261;
  margin: 18px 0px;
`;
const p = css`
  font-size: 14px;
  width: 100%;
  max-width: 400px;
  margin: 18px 0px;
`;

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setLoading] = useState(true);

  // Create fake loading state to simulate api
  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setSearchValue(e.target.value);
  };

  // Provides ability to add additional searchable fields in the future
  // Including name and email for now
  const searchFields = (searchValue: string, fields: string[]) => {
    let value = searchValue.toLowerCase();
    return fields.some((field) => {
      return field.toLowerCase().includes(value);
    });
  };

  const results = people.filter((person) => {
    const { name, email } = person;
    if (searchValue.length > 0) {
      return searchFields(searchValue, [name, email]);
    }
    if (searchValue.length === 0) return person;
    return false;
  });

  const hasSearchablePeople = results.length > 0;
  const hasSearcValue = searchValue.length > 0;
  const showNoSeachResultsMessage = !hasSearchablePeople && hasSearcValue;

  return (
    <div css={container}>
      {isLoading && <p> loading all these people! </p>}
      {!isLoading && (
        <Fragment>
          <div css={searchContainer}>
            <h1 css={header}>The Person Finder</h1>
            <p css={p}>
              If you just can’t find someone and need to know what they look
              like, you’ve come to the right place! Just type the name of the
              person you are looking for below into the search box!
            </p>
            <Search
              onChange={onChange}
              label="search-name"
              placeholder={'Type a name...'}
              searchValue={searchValue}
            />
          </div>

          {hasSearchablePeople && results.length === 1 && (
            <p>{`${results.length} person matches your search`}</p>
          )}
          {hasSearchablePeople && results.length > 1 && (
            <p>{`${results.length} people match your search`}</p>
          )}
          {showNoSeachResultsMessage && (
            <p>No people match your search, try a new search term.</p>
          )}
          {hasSearchablePeople && <PeopleList results={results} />}
        </Fragment>
      )}
    </div>
  );
};

export default App;
