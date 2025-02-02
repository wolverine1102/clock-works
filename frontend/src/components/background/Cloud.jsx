import React from 'react';


export function CloudType1({ speed, top, left }) {
  return (
    <>
      <div
        style={{ animation: `moveCloud ${speed}s linear infinite` }}>
        <div id='cloud-type-1'
          style={{
            top: `${top}px`,
            left: `${left}px`,
          }}
          className={`
          absolute
          z-10
          w-44
          h-12
          bg-stone-50
          rounded-full
          before:absolute
          before:w-11
          before:h-12
          before:bg-stone-50
          before:-top-6
          before:left-6
          before:rounded-t-full
          after:absolute
          after:w-22
          after:h-12
          after:bg-stone-50
          after:-top-9
          after:left-14
          after:rounded-t-full
          `}
        >
          <div 
            className={`
            absolute
            z-11
            w-40
            h-9
            bg-stone-100
            rounded-full
            top-4.5
            left-4.5
            before:absolute
            before:w-9
            before:h-9
            before:bg-stone-100
            before:-top-6
            before:left-6
            before:rounded-t-full
            after:absolute
            after:w-18
            after:h-9
            after:bg-stone-100
            after:-top-9
            after:left-14
            after:rounded-t-full
            `}
          />
        </div>
      </div>
    </>
  )
}

export function CloudType2() {
  return (
    <>
      <div id='cloud-type-2'>
         <div
          className={`
          
          `}
         />
      </div>
    </>
  )
}
