import css from './statistics.module.css'
export const State = () => {
    (<div>
        <p className={css.toSee}>Good: {this.state.good}</p>
        <p className={css.toSee}>Neutral: {this.state.neutral}</p>
        <p className={css.toSee}>Bad: {this.state.bad}</p>
        <p className={css.toSee}>Total: {this.countTotalFeedback()}</p>
        <p className={css.toSee}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
    </div>)
}