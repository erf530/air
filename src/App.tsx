import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import styled from 'styled-components';
import people from './data/MOCK_DATA.json';
import { Search } from '../src/components/Search/Search';
import { PeopleList } from '../src/components/PeopleList/PeopleList';
import { Person } from './types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  margin: 32px;
  margin-top: 80px;
  position: absolute;
`;
const Header = styled.h1`
  font-family: Georgia;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0.03em;
`;
const Paragraph = styled.p`
  font-size: 14px;
`;

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setSearchValue(e.target.value);
  };

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

  console.log(typeof people);
  console.log('results', results);

  const hasSearchablePeople = results.length > 0;
  const hasSearcValue = searchValue.length > 0;
  const showNoSeachResultsMessage = !hasSearchablePeople && hasSearcValue;

  return (
    <StyledContainer>
      {isLoading && <p> loading all these people! </p>}
      {!isLoading && (
        <Fragment>
          <Header>The Person Finder</Header>
          <Paragraph>
            If you just can’t find someone and need to know what they look like,
            you’ve come to the right place! Just type the name of the person you
            are looking for below into the search box!
          </Paragraph>
          <Search
            onChange={onChange}
            label="search-name"
            placeholder={'Type a name...'}
            searchValue={searchValue}
          />

          {showNoSeachResultsMessage && (
            <p>No people match your search, try a new search term.</p>
          )}
          {hasSearchablePeople && <PeopleList results={results} />}
        </Fragment>
      )}
    </StyledContainer>
  );
};

export default App;
