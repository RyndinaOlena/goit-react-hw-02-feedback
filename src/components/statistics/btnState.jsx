export const BtnState = (addGoodRating, addNeutralRating, addBadRating) => {
    return <div> <button type="button" onClick={addGoodRating}>Good</button>
        <button type="button" onClick={addNeutralRating}>Neutral</button>
        <button type="button" onClick={addBadRating}>Bad</button></div>
}