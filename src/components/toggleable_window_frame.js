import React, { useState } from 'react'
import WindowFrame from '../components/window_frame'
import WindowFrameClosed from '../components/window_frame_closed'

export default function ToggleableWindowFrame(props) {
  const [windowOpen, setWindowOpen] = useState(props.isOpen)
  function closeWindow() {
    setWindowOpen(false)
  }

  function openWindow() {
    setWindowOpen(true)
  }

  if (windowOpen) {
    return (
      <WindowFrame
        id={props.id}
        color={props.color}
        windowHeading={props.windowHeading}
        height={props.height}
        width={props.width}
        innerText={props.innerText}
        onWindowClose={closeWindow}
      />
    )
  } else {
    return (
      <WindowFrameClosed
        id={props.id}
        color={props.color}
        windowHeading={props.windowHeading}
        height={props.height}
        width={props.width}
        innerText={props.innerText}
        onWindowOpen={openWindow}
      />
    )
  }
}
