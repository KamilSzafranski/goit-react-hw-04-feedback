import { Feedback } from './Feedback/Feedback';
import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { useFeedback } from 'hooks/useFeedback';

export const App = () => {
  const { good, neutral, bad, handleClick } = useFeedback();

  return (
    <div>
      <Feedback handleClick={handleClick} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};
