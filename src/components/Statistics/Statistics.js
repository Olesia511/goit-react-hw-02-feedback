import {
  StatisticsNumber,
  TotalFeedbackContainer,
} from './Statistics.styled.js';

export const Statistics = ({ value, total, percentage }) => {
  return (
    <div>
      <StatisticsNumber>
        {Object.keys(value).map(el => {
          const name = el[0].toUpperCase() + el.slice(1, el.length);
          return (
            <h3 key={el}>
              {name}: {value[el]}
            </h3>
          );
        })}
      </StatisticsNumber>
      {!total && <h3>There is no feedback</h3>}
      {total > 0 && (
        <TotalFeedbackContainer>
          <h3>Total number of feedback: {total}</h3>
          <h3>Positive feedback: {percentage}%</h3>
        </TotalFeedbackContainer>
      )}
    </div>
  );
};
