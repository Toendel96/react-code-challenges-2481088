import { useState } from 'react'
import WindowEvent from './WindowEvent'

export default function () {
  const [windowEvent, setWindowEvent] = useState(false)
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
    </div>
  )
}
