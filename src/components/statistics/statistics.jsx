import { Component } from 'react';
import css from './statistics.module.css'
import { Notification } from './notification'

export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addGoodRating = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1
            }
        })
    }
    addNeutralRating = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    }
    addBadRating = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
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
        const showRating = this.countTotalFeedback() > 0;
        return (<div>
            <h1>Please leave feedback</h1>
            <div>
                <button type="button" onClick={this.addGoodRating}>Good</button>
                <button type="button" onClick={this.addNeutralRating}>Neutral</button>
                <button type="button" onClick={this.addBadRating}>Bad</button>
                {showRating && (<div>
                    <p className={css.toSee}>Good: {this.state.good}</p>
                    <p className={css.toSee}>Neutral: {this.state.neutral}</p>
                    <p className={css.toSee}>Bad: {this.state.bad}</p>
                    <p className={css.toSee}>Total: {this.countTotalFeedback()}</p>
                    <p className={css.toSee}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div>)}
                {!showRating && (<Notification />)}

            </div>
        </div>)
    }
}