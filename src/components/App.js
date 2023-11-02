import React, { Component } from 'react';
import { GlobalStyle } from './ClobalStyles';
import { Button, ContainerBtn, Title, BasicContainer, StatisticsTitle, StatisticsContainer, TotalFeedbackContainer } from './App.styled';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { id } = e.target;

    if (id === 'good') {
      return this.setState(prevState => ({ good: prevState.good + 1 }));
    }
    if (id === 'neutral') {
      return this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }
    if (id === 'bad') {
      return this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (goodFeedback, totalFeedback) => {
    if (goodFeedback > 0) {
      return Math.round((goodFeedback / totalFeedback) * 100);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const percentageFeedback = this.countPositiveFeedbackPercentage(
      good,
      totalFeedback
    );

    return (

      <BasicContainer>
      
        <Title>Please leave feedback</Title>
        <ContainerBtn>
          <Button id="good" type="button" onClick={this.handleIncrement}>
            Good
          </Button>
          <Button id="neutral" type="button" onClick={this.handleIncrement}>
            Neutral
          </Button>
          <Button id="bad" type="button" onClick={this.handleIncrement}>
            Bad
          </Button>
        </ContainerBtn>

        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsContainer>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </StatisticsContainer>

        {totalFeedback > 0 && (
          <TotalFeedbackContainer>
            <p>Total number of feedback: {totalFeedback}</p>
            <p>Positive feedback: {percentageFeedback}%</p>
          </TotalFeedbackContainer>
        )}
      
        <GlobalStyle />
        </BasicContainer>
    );
  }
}
