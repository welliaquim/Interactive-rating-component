import { TwinkleTwinkle } from './TwinkleTwinkle';

export function RateCard({ score, setScore, setEnviado, notas }) {
  return (
    <div className="card">
      <div>
        <TwinkleTwinkle />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>

      <div className="rate">
        {notas.map((nota) => {
          return (
            <button
              className={score === nota ? 'ratescore selected' : 'ratescore'}
              onClick={() => setScore(score === nota ? 0 : nota)}
            >
              {nota}
            </button>
          );
        })}

        {/* <button
          className={score === 2 ? 'ratescore selected' : 'ratescore'}
          onClick={() => setScore(score === 2 ? 0 : 2)}
        >
          2
        </button>
        <button
          className={score === 3 ? 'ratescore selected' : 'ratescore'}
          onClick={() => setScore(score === 3 ? 0 : 3)}
        >
          3
        </button>
        <button
          className={score === 4 ? 'ratescore selected' : 'ratescore'}
          onClick={() => setScore(score === 4 ? 0 : 4)}
        >
          4
        </button>
        <button
          className={score === 5 ? 'ratescore selected' : 'ratescore'}
          onClick={() => setScore(score === 5 ? 0 : 5)}
        >
          5
        </button> */}
      </div>
      <input className="inputColor" type="submit" value="Submit" disabled={!score} onClick={() => setEnviado(false)} />
    </div>
  );
}
