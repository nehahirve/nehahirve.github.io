import React, { useState } from 'react'

import ErrorWindow from './error_window'
import soundfile from '../../static/error.mp3'

export default function ErrorWindowList(props) {
  const questions = [
    'What is the nature of reality?',
    'Are you satisfied with the life you lead?',
    'Where is the Internet?',
    'Is your existence entirely impossible?',
    'Can I have a lock of your hair?',
    'What are you hiding from me?',
    'Are you even connected to the internet right now?',
    'Would you like to view Windows Help?',
    'Where is the nearest exit?',
    'Would you like to destroy all your documents?',
    'Who are you?',
    'Can you feel your left foot?',
    'Do you believe in Asparagus?',
  ]
  const [array, setArray] = useState([getRandom(questions)])
  const [left, setLeft] = useState([range(0, 80)])
  const [top, setTop] = useState([range(-20, -20)])

  function getRandom(questions) {
    return questions[Math.floor(Math.random() * questions.length)]
  }
  function range(min, max) {
    return Math.random() * (max - min) + min
  }

  function clickHandler() {
    const audio = new Audio(soundfile)
    audio.play()
    setArray(array => array.concat(getRandom(questions)))
    setLeft(array => array.concat(range(0, 80)))
    setTop(array => array.concat(range(-30, 0)))
  }

  const errorWindows = array.map((item, index) => {
    return (
      <ErrorWindow
        id={props.id}
        key={index}
        errorName={props.errorName}
        innerText={item}
        buttonText={props.buttonText}
        width={props.width}
        onIDKClick={clickHandler}
        left={left[index]}
        top={top[index]}
      />
    )
  })

  if (props.errorName !== 'Error!') {
    return (
      <ErrorWindow
        id={props.id}
        errorName={props.errorName}
        innerText={props.innerText}
        buttonText={props.buttonText}
        width={props.width}
      />
    )
  } else {
    return <>{errorWindows}</>
  }
}
