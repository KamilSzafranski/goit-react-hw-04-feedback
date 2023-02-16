import PropTypes from 'prop-types';
import React from 'react';
import { Title, Btn } from './Feedback.styled';
import { Fragment } from 'react';

export const Feedback = ({ handleClick }) => {
  return (
    <>
      <Title>Please leave feedback</Title>
      <Btn onClick={handleClick}>good</Btn>
      <Btn onClick={handleClick}>neutral</Btn>
      <Btn onClick={handleClick}>bad</Btn>
    </>
  );
};

Feedback.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
