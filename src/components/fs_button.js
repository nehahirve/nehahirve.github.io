import React, { useState } from 'react'
import Draggable from 'react-draggable'

export default function FSButton(props) {
  function sayHello(e) {
    let element = e.target.parentNode.parentNode.parentNode.parentNode
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }
  }

  return (
    <Draggable handle="button">
      <div className="box">
        <button className="big-red" onClick={sayHello}>
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
