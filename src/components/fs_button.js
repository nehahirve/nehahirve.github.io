import React, { useState } from 'react'
import Draggable from 'react-draggable'

export default function FSButton(props) {
  function toggle() {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => console.log('Document Exited form Full screen mode'))
        .catch(err => console.error(err))
    } else {
      document.documentElement.requestFullscreen()
      document.documentElement.webkitRequestFullscreen()
    }
  }

  return (
    <Draggable handle="button">
      <div className="box">
        <button className="big-red" onClick={toggle}>
          FULL_SCREEN.EXE
        </button>
      </div>
    </Draggable>
  )
}

// export class FSButton extends React.Component {
//   constructor(props) {
//     super(props)
//     this.test = this.test.bind(this)
//   }

//   test() {
//     console.log('hello')
//   }

//   render() {
//     return (
//       <button className="big-red" onClick={this.test}>
//         FULL_SCREEN.EXE
//       </button>
//     )
//   }
// }

// export default FSButton
