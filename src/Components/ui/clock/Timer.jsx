import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState, useEffect, useRef } from "react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import { SettingsContext } from '../../../Context';

const red = '#FEBD2F';
const green = '#4338CA';

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {

    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        className='w-44 h-44'
        styles={buildStyles({
          textColor: '#fff',
          pathColor: mode === 'work' ? red : green,
          tailColor: 'rgba(255,255,255,.2)',
        })} />
      <div className='flex bg-n-8 border border-neutral-200 dark:border-white/[0.2] mt-8 text-black dark:text-white rounded-md items-center gap-8 justify-between'>
        <div style={{ marginTop: '20px' }}>
          {isPaused
            ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
            : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
        </div>
        <p className='h-11 w-[1px] dark:bg-white/[0.2] bottom-10 top-10'></p>
        <div style={{ marginTop: '20px' }}>
          <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
        </div>
      </div>
    </div>
  );
}

export default Timer;