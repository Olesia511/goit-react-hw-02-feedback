import React, { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const { id } = evt.target;

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
      <div className={css.container}>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css['container-btn']}>
          <button
            id="good"
            type="button"
            className={css.btn}
            onClick={this.handleIncrement}
          >
            Good
          </button>
          <button
            id="neutral"
            type="button"
            className={css.btn}
            onClick={this.handleIncrement}
          >
            Neutral
          </button>
          <button
            id="bad"
            type="button"
            className={css.btn}
            onClick={this.handleIncrement}
          >
            Bad
          </button>
        </div>

        <h3 className={css['stat-title']}>Statistics</h3>
        <div className={css['statistic-container']}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
        {totalFeedback > 0 && (
          <div className={css.total}>
            <p>Total number of feedback: {totalFeedback}</p>
            <p>Positive feedback: {percentageFeedback}%</p>
          </div>
        )}
      </div>
    );
  }
}
