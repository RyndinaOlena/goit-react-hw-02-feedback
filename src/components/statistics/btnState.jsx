export const BtnState = ({ feedbackTypes, addFeedback }) => {
    return (
        <div>
            {feedbackTypes.map(item => <button type="button" key={item} onClick={() => addFeedback(item)}>{item}</button>)}</div>
    )
}