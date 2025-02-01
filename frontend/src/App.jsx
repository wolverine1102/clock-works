import { useState } from 'react'
import TimeZoneIcon from './assets/time-zone.svg?react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs open-sans-test tracking-[2px]">
        Click on the Vite and React logos to learn more
      </p>
      <TimeZoneIcon height="200" width="200" />
    </>
  )
}

export default App
