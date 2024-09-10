'use client';
import React from 'react';
import { AddresInputProps } from './AdressInput.props';
import { AddressSuggestions } from 'react-dadata';
import style from './AdressInput.module.scss';
import 'react-dadata/dist/react-dadata.css';
export const AdressInput: React.FC<AddresInputProps> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token={'258f96963df300af23d7a7a10a7176fbf996106f'}
      onChange={(data) => data && onChange?.(data.value)}
      suggestionClassName={style.suggestion}
    />
  );
};
