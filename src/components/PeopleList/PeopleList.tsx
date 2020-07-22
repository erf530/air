import React from 'react';
import { css } from 'styled-components/macro';
import { Person } from '../../types';

const unorderedList = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: unset;
  margin-top: 18px;
`;

const listItem = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
  min-width: 100px;
`;

const avatarImg = css`
  width: 30%;
  height: 30%;
  border-radius: 100%;
  margin: 16px;
  border: 1px solid black;
`;

const contentContainer = css`
  width: 60%;
`;

type Props = {
  results: Person[];
};

export const PeopleList = ({ results }: Props) => {
  return (
    <ul css={unorderedList}>
      {results.map(({ id, name, email, avatar, description }: Person) => (
        <li css={listItem} key={id}>
          <img src={avatar} alt={name} css={avatarImg} />
          <div css={contentContainer}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
