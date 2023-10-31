import { logDOM } from "@testing-library/react";
import React, {Component} from "react";
export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  handleIncrement = evt => {
    const currentBtn = evt.target.textContent.toLowerCase();

    if (currentBtn === 'good') {
      return this.setState({ good: this.state.good + 1 });
    }
    if (currentBtn === 'neutral') {
      return this.setState({neutral: this.state.neutral + 1});
    }
    if (currentBtn === 'bad') {
      return this.setState({bad: this.state.bad + 1});
    }
    
  }

  countTotalFeedback = (total) => {
    return total = this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = (goodFeedback, totalFeedback) => {
    if (goodFeedback > 0) {
      return Math.round((goodFeedback / totalFeedback) * 100);
      
    } 
    return 0;
  }
  
  render() {
    const { good, neutral, bad } = this.state;

    let total = 0;
    const totalFeedback = this.countTotalFeedback(total);
    const percentageFeedback = this.countPositiveFeedbackPercentage(good, totalFeedback);

  
    return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101'
          }}
        >
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleIncrement}>Good</button>
          <button type="button" onClick={this.handleIncrement}>Neutral</button>
          <button type="button" onClick={this.handleIncrement}>Bad</button>

          <h3>Statistics</h3>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total number of feedback: {totalFeedback}</p>
          <p>Positive feedback: {percentageFeedback}%</p>
        </div>)
    }

  };
