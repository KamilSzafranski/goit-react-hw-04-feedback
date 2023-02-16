import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { HeaderStatistics, StatsText } from './Statistics.styled';
import { Noticifaciton } from '../Notification/Notification';
import { Fragment } from 'react';

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const poistiveFeedback = (good + neutral) / total;
  const displayFeedback = Math.round(poistiveFeedback * 100);

  return (
    <div>
      {total === 0 ? (
        <Noticifaciton />
      ) : (
        <>
          <HeaderStatistics>Statistics</HeaderStatistics>
          <StatsText>{`Good:${good}`}:</StatsText>
          <StatsText>{`Neutral:${neutral}`}</StatsText>
          <StatsText>{`Bad:${bad}`}</StatsText>
          <StatsText>{`Total:${good + bad + neutral}`}</StatsText>
          <StatsText>{`Positive feedback: ${displayFeedback} %`}</StatsText>
        </>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
