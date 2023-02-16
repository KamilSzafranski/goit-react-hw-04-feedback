import { useState } from 'react';

const FeedbackType = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

export const useFeedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const {
      target: { textContent: type },
    } = event;

    if (type === FeedbackType.GOOD) setGood(prevState => (prevState += 1));
    if (type === FeedbackType.NEUTRAL)
      setNeutral(prevState => (prevState += 1));
    if (type === FeedbackType.BAD) setBad(prevState => (prevState += 1));
  };

  return { good, neutral, bad, handleClick };
};
