import React from 'react'
import Draggable from 'react-draggable'

export class FSButton extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = `bsod.js`

    script.async = false

    document.body.appendChild(script)

    document.body.removeChild(script) // remove it so in each time you visit this route it won't create new script and append it to </body> this should work just fine.
  }

  render() {
    return (
      <Draggable handle="button">
        <div className="box">
          <button className="big-red">DO_NOT_PRESS.EXE</button>
        </div>
      </Draggable>
    )
  }
}

export default FSButton
