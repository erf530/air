import React from 'react';
import styled from 'styled-components';

// https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text
const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const StyledInput = styled.input`
  font-family: Avenir;
  width: 400px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  padding: 1rem;
`;

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  placeholder: string;
  label: string;
};

export const Search = ({
  onChange,
  searchValue,
  placeholder,
  label,
}: Props) => {
  return (
    <form role="search">
      <HiddenLabel html-for="search">{label}</HiddenLabel>
      <StyledInput
        type="search"
        id="search"
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
        value={searchValue}
      />
    </form>
  );
};
