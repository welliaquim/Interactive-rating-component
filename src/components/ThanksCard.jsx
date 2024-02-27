import { ThanksImage } from './ThanksImage';

export function ThanksCard({ score, setEnviado, notas }) {
  return (
    <div className="thankyou">
      <ThanksImage />
      <div>
        <p>
          You selected out {score} of {notas.length}
        </p>
      </div>
      <div className="thx">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
          touch!
        </p>
        <input className="inputColor" type="submit" value="Go back to the start." onClick={() => setEnviado(true)} />
      </div>
    </div>
  );
}
