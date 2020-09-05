import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  const getTotalNumberOfFeedBacks = (val1, val2, val3) => val1 + val2 + val3;

  const getPercentOfPositiveFeedBacks = (good) => {
    if (good <= 0) return 0;
    return (
      (good / getTotalNumberOfFeedBacks(good, neutral, bad)) *
      100
    ).toFixed(2);
  };

  const getAverageFeedBackValue = (good, neutral, bad) => {
    return ((good + neutral + bad) / 3).toFixed(2);
  };

  return getTotalNumberOfFeedBacks(good, neutral, bad) === 0 ? (
    <p>No feedbacks given yet</p>
  ) : (
    <table>
      <tbody>
        <tr>
          <td>Good feedbacks</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral feedbacks</td>
          <td>{neutral} </td>
        </tr>
        <tr>
          <td>Bad feedbacks</td>
          <td>{bad} </td>
        </tr>
        <tr>
          <td>Total feedbacks</td>
          <td>{getTotalNumberOfFeedBacks(good, neutral, bad)}</td>
        </tr>
        <tr>
          <td>Average number of feedbacks</td>
          <td>{getAverageFeedBackValue(good, neutral, bad)}</td>
        </tr>
        <tr>
          <td>Percentage of Positive Feedback</td>
          <td>
            {getPercentOfPositiveFeedBacks(good)}
            {"%"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
