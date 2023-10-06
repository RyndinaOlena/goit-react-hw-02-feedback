import css from './statistics.module.css'
export const Rating = ({ feedbackTypes, countTotalFeedback, countPositiveFeedbackPercentage, addFeedback }) => {

    return (<div>
        <div> {feedbackTypes.map(item => <p className={css.toSee} key={item} onClick={() => addFeedback(item)}>{item}: {[item]}</p>)}

            <p className={css.toSee}>Total: {countTotalFeedback}</p>
            <p className={css.toSee}>Positive feedback: {countPositiveFeedbackPercentage}%</p>
        </div>

    </div>

    )
}