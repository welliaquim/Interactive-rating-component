import { useState } from 'react';
import './App.css';
import './style.css';
import { TwinkleTwinkle } from './components/TwinkleTwinkle';
import { ThanksImage } from './components/ThanksImage';
import { Titulo } from './components/Titulo';
import { RateCard } from './components/RateCard';
import { ThanksCard } from './components/ThanksCard';

function App() {
  const [score, setScore] = useState(0);
  const [enviado, setEnviado] = useState(true);
  const notas = [1, 2, 3, 4, 5];

  return (
    <>
      {enviado ? (
        <RateCard setScore={setScore} score={score} setEnviado={setEnviado} notas={notas} />
      ) : (
        <ThanksCard score={score} setEnviado={setEnviado} notas={notas} />
      )}
    </>
  );
}

export default App;
