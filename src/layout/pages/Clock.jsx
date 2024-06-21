import React, { useState } from 'react'
import { SettingsContext } from '../../Context';
import SettingsClock from '../../Components/ui/clock/Settings';
import Timer from '../../Components/ui/clock/Timer';
import Alarm from '../../Components/ui/clock/Alarm';
import { Divide } from 'lucide-react';
import CountDown from '../../Components/ui/clock/CountDown';

const Clock = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(0);
  return (
    <>
      <div className='grid grid-cols-1 max-w-6xl w-full mx-auto items-center justify-center'>
        <div className='border text-sm font-medium glassCard relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-md'>
          <SettingsContext.Provider value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}>
            {showSettings ? <SettingsClock /> : <Timer />}
          </SettingsContext.Provider>
        </div>
        <div>
          <Alarm />
        </div>
        <div>
          <CountDown />
        </div>
      </div>
    </>
  )
}

export default Clock
