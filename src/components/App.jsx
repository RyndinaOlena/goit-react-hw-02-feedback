import { Component } from 'react';
import { BtnState } from './statistics/btnState';
import { Rating } from './statistics/rating';
import { Notification } from './statistics/notification';
export class App extends Component {

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  };

  addFeedback = (item) => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1
      }
    })
  }

  countTotalFeedback = () => {
    return this.state.Bad + this.state.Good + this.state.Neutral;
  }

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.Good / this.countTotalFeedback()) * 100)
  }


  render() {
    const feedbackTypes = Object.keys(this.state);
    const showRating = (() => this.countTotalFeedback() > 0);
    return (
      <div>
        <h1>Please leave feedback</h1>
        <BtnState feedbackTypes={feedbackTypes} addFeedback={this.addFeedback} />
        {showRating && <Rating countTotalFeedback={this.countTotalFeedback()} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()} feedbackTypes={feedbackTypes} />}
        {!showRating && (<Notification />)}
      </div >
    )
  }


}
