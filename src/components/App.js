import React, { Component } from 'react';
import { GlobalStyle } from './ClobalStyles';
import { Title, BasicContainer, Section } from './App.styled';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = stateValue => {
    this.setState(prevState => ({
      [stateValue]: prevState[stateValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return good > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <BasicContainer>
        <Section title="feedback">
          <Title>Please leave feedback</Title>

          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>

        <Section title="statistics">
          <Title>Statistics</Title>

          <Notification
            value={this.state}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>

        <GlobalStyle />
      </BasicContainer>
    );
  }
}
