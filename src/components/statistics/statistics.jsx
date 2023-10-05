import { Component } from 'react';
import css from './statistics.module.css'
import { Notification } from './notification'

export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addFeedback = (item) => {
        this.setState(prevState => {
            return {
                [item]: prevState[item] + 1
            }
        })
    }

    countTotalFeedback = () => {
        return this.state.bad + this.state.good + this.state.neutral;
    }

    countPositiveFeedbackPercentage = () => {
        return parseInt((this.state.good / this.countTotalFeedback()) * 100)
    }

    render() {
        const feedbackTypes = Object.keys(this.state);
        const showRating = this.countTotalFeedback() > 0;
        return (<div>
            <h1>Please leave feedback</h1>
            <div>
                {feedbackTypes.map(item => <button type="button" key={item} onClick={() => this.addFeedback(item)}>{item}</button>)}
                {showRating && (
                    <div> {feedbackTypes.map(item => <p className={css.toSee} key={item} onClick={() => this.addFeedback(item)}>{item}: {this.state[item]}</p>)}
                        <p className={css.toSee}>Total: {this.countTotalFeedback()}</p>
                        <p className={css.toSee}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                    </div>)}
                {!showRating && (<Notification />)}

            </div>
        </div>)
    }
}