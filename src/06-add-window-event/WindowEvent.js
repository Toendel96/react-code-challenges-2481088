import React, { useEffect } from 'react'

export default function () {
useEffect(() => {
  const doubleClick = () => alert('mouse clicked')

    window.addEventListener('dblclick', doubleClick) //dblclick is a built in window event that checks for double clicks in browser

    return () => window.removeEventListener('dblclick', doubleClick)
}, [])

  return (
    <h2>Window event active</h2>
  )
}
