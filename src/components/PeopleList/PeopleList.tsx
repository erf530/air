import React from 'react';
import styled from 'styled-components';
import { Person } from '../../types';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

// const Avatar = styled.img`
//   width: 90%;
//   border-radius: 100%;
//   margin: 15px;
//   transition: all ease-in-out 0.25s;
// `;
type Props = {
  results: Person[];
};

export const PeopleList = ({ results }: Props) => {
  return (
    <ul>
      {results.map(({ id, name, email, avatar, description }: Person) => (
        <li key={id}>
          <p>{name}</p>
          <p>{email}</p>
          <p>{description}</p>
          <img height="100" width="100" src={avatar} alt={name} />
        </li>
      ))}
    </ul>
  );
};
