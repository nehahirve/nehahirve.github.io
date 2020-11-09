import React from 'react'

export class Canvas extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = `tetris.js`

    script.async = false

    document.body.appendChild(script)

    document.body.removeChild(script) // remove it so in each time you visit this route it won't create new script and append it to </body> this should work just fine.
  }

  render() {
    return (
      <div className="wrapper">
        <div className="canvas-wrapper">
          <canvas className="tetris"></canvas>
        </div>
        <button className="tetris-button">PLAY</button>
      </div>
    )
  }
}

export default Canvas
