import React from 'react';
import Earth from './Earth';
import Clouds from './Clouds';

export default function Background() {
  return (
    <div className='relative overflow-hidden'>
        <div id='sky' className='z-0 w-screen h-screen bg-sky-100'>
            <Clouds />
        </div>
    </div>
  )
}
