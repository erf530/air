import React from 'react';
import { render } from '@testing-library/react';
import { Search } from './Search';

const props = {
  onChange: () => {},
  searchValue: 'D',
  placeholder: 'Type a name...',
  label: 'search-name',
};
describe('Component: Search', () => {
  it('renders value', () => {
    const { getByLabelText } = render(<Search {...props} />);
    const { value } = getByLabelText('search-name');
    expect(value).toBe('D');
  });

  // It renders value on change
});
