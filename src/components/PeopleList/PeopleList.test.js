import React from 'react';
import { render, getAllByDisplayValue } from '@testing-library/react';
import PeopleList from './PeopleList';

const MOCK_DATA = [
  {
    id: 1,
    name: 'Dyanna Cullingford',
    email: 'dcullingford0@nba.com',
    avatar: 'https://robohash.org/rerumliberoamet.png?size=200x200&set=set1',
    description:
      'Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture',
  },
  {
    id: 2,
    name: 'Gunther Heinsen',
    email: 'gheinsen1@pen.io',
    avatar: 'https://robohash.org/teneturutenim.png?size=200x200&set=set1',
    description:
      'Diffuse large B-cell lymphoma, extranodal and solid organ sites',
  },
  {
    id: 3,
    name: 'Oralia Siebart',
    email: 'osiebart2@photobucket.com',
    avatar: 'https://robohash.org/quiplaceatex.png?size=200x200&set=set1',
    description: 'Poisoning by opium, accidental (unintentional), sequela',
  },
  {
    id: 4,
    name: 'Tobe Bonellie',
    email: 'tbonellie3@livejournal.com',
    avatar: 'https://robohash.org/excumqueenim.png?size=200x200&set=set1',
    description:
      'Corrosion of second degree of right hand, unspecified site, initial encounter',
  },
];

describe('Component: People List', () => {
  it('renders a list of people', () => {
    // Check length
    // Check proper info is rendered (name, email, description, avatar)
  });
});
