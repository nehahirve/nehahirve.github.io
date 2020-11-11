import React from 'react'
export default function FSButton(props) {
  function fullScreen(e) {
    console.log(e.target.parentNode.parentNode.parentNode)
    launchIntoFullscreen(e.target)
  }

  function launchIntoFullscreen(element) {
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
    <button className="big-red" onClick={fullScreen}>
      FULL_SCREEN.EXE
    </button>
  )
}
