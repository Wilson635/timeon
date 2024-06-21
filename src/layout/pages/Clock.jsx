import React, { useState } from 'react'
import Alarm from '../../Components/ui/clock/Alarm';
import CountDown from '../../Components/ui/clock/CountDown';

const Clock = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-x-5 max-w-6xl w-full mx-auto items-center justify-center'>
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
