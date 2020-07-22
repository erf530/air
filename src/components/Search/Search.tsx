import React from 'react';
import { css } from 'styled-components/macro';

const styledForm = css`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 30px;
`;
// https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text
const hidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const styledInput = css`
  font-family: Helvetica;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 1rem;
  height: 40px;
  background-color: #efefef;
  border: transparent;
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
    <form role="search" css={styledForm}>
      <label css={hidden} html-for="search">
        {label}
      </label>
      <input
        type="search"
        id="search"
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
        value={searchValue}
        css={styledInput}
      />
    </form>
  );
};
