import React from 'react';

const RateCard = () => {
    return (
    <>
        <div class="card">
          <div>
            <img src="./images/icon-star.svg" alt="a star"></img>
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>
          <div class="rate">
            <button class="ratescore"	onClick={(event) => setScore(1)}>1</button>
            <button class="ratescore"	onClick={(event) => setScore(2)}>2</button>
            <button class="ratescore" onClick={(event) => setScore(3)}>3</button>
            <button class="ratescore" onClick={(event) => setScore(4)}>4</button>
            <button class="ratescore" onClick={(event) => setScore(5)}>5</button>
          </div>
            <input type="submit" value="Submit" disabled={!score} onClick={(event) => setDevoAparecer(!devoAparecer)}></input>
        </div>
    </>);
};

export default RateCard;