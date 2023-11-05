import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        const name = option[0].toUpperCase() + option.slice(1, option.length);
        return (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};
