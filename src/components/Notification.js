import { Statistics } from './Statistics/Statistics';

export const Notification = ({ value, total, percentage }) => {
  return total === 0 ? (
    <h3>There is no feedback</h3>
  ) : (
    <Statistics value={value} total={total} percentage={percentage} />
  );
};
