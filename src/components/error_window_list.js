import React, { useState } from 'react'
import Draggable from 'react-draggable'
import ErrorWindow from './error_window'

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
  ]
  const [array, setArray] = useState([questions[0]])

  function getRandom(questions) {
    return questions[Math.floor(Math.random() * questions.length)]
  }

  function clickHandler() {
    setArray(array => array.concat(getRandom(questions)))
  }

  const errorWindows = array.map((item, index) => {
    return (
      <Draggable handle=".error-navbar">
        <div className="box no-cursor">
          <ErrorWindow
            id={props.id}
            key={index}
            errorName={props.errorName}
            innerText={item}
            buttonText={props.buttonText}
            width={props.width}
            onIDKClick={clickHandler}
          />
        </div>
      </Draggable>
    )
  })

  if (props.errorName !== 'Error!') {
    return (
      <Draggable handle=".error-navbar">
        <div className="box no-cursor">
          <ErrorWindow
            id={props.id}
            errorName={props.errorName}
            innerText={props.innerText}
            buttonText={props.buttonText}
            width={props.width}
          />
        </div>
      </Draggable>
    )
  } else {
    return <>{errorWindows}</>
  }
}
