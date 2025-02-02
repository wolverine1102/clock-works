import React from 'react';
import { CloudType1, CloudType2 } from './Cloud';

export default function Clouds() {
  return (
    <div>
        <CloudType1 
          speed={25}
          top={100}
          left={65}
        />
        <CloudType1 
          speed={20}
          top={80}
          left={10}
        />
        <CloudType1 
          speed={23}
          top={65}
          left={10}
        />
    </div>
  )
}
