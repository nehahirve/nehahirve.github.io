/*!
 * bsod.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

;(function bsod() {
  /**
   * Utils
   */

  // Applies css `properties` to an element.
  function applyProperties(target, properties) {
    for (var key in properties) {
      target.style[key] = properties[key]
    }
  }

  // Lord knows why this is so hard.
  // http://stackoverflow.com/questions/2400935/browser-detection-in-javascript
  function getBrowser() {
    return 'FATAL ERROR'
  }

  /**
   * BSOD
   */

  var isActive = false
  var errorRotation = 0

  function init() {
    let button = document.querySelector('.big-red')

    button.addEventListener('click', onError, false)
  }

  function play() {
    const audio = new Audio('beep.mp3')
    audio.play()
  }
  function onError(event) {
    const audio = new Audio('beep.mp3')
    audio.play()

    window.addEventListener('click', play)

    document.documentElement.requestFullscreen()
    document.documentElement.webkitRequestFullscreen()
    // Lol, forget errors
    event.preventDefault()
    event.stopPropagation()

    if (isActive === false) {
      // Lol, forget the dom.
      wipeDomAndHead()

      // Lol, the console is dumb.
      messWithConsole()

      // Lol, blue screen!
      showBSOD()

      isActive = true
    }
  }

  // The easiest way to mess with someones console,
  // is to delete what's logged and constantly smash the logs.
  function messWithConsole() {
    clearConsole()
    setInterval(addLog, 10)
  }

  function addLog() {
    console.log('bsod'[errorRotation])
    errorRotation++
    if (errorRotation > 3) {
      errorRotation = 0
    }
  }

  function clearConsole() {
    // Most modern browsers support this
    if (window.console && typeof console.clear === 'function') {
      console.clear()
      // This seems to be supported by older versions of browsers
    } else if (typeof clear === 'function') {
      clear()
    }
  }

  function wipeDomAndHead() {
    document.body.innerHTML = ''
    document.getElementsByTagName('head')[0].innerHTML = ''
    document.title = 'Blue Screen of Death'
  }

  function showBSOD() {
    var body = document.body
    var bleu = window.bleu && window.bleu === true

    /**
     * Main Container
     */

    var bgStyles = {
      'font-family':
        "'Bitstream Vera Sans Mono', 'Lucida Sans Typewriter', monaco, 'Bitstream Vera Sans Mono', monospace",
      background: bleu ? "url('https://i.imgur.com/S5hmPlY.jpg')" : '#051DB5',
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      color: '#fff',
    }

    var bsodContainer = document.createElement('div')
    applyProperties(bsodContainer, bgStyles)

    /**
     * BSOD Error
     */

    var errorStyles = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      'font-size': '14px',
      'max-width': '420px',
      transform: 'translateX(-50%) translateY(-50%)',
      mozTransform: 'translateX(-50%) translateY(-50%)',
      webkitTransform: 'translateX(-50%) translateY(-50%)',
    }

    var error = document.createElement('div')
    applyProperties(error, errorStyles)
    bsodContainer.appendChild(error)

    /**
     * Header
     */

    var headerStyles = {
      'text-align': 'center',
      'margin-bottom': '10px',
    }

    var header = document.createElement('div')
    applyProperties(header, headerStyles)
    error.appendChild(header)

    /**
     * Header Contents
     */

    var headerContentStyles = {
      background: 'rgba(255, 255, 255, 0.7)',
      color: bleu ? '#015EAC' : '#015EAC',
      margin: 'auto',
    }

    var headerContent = document.createElement('span')
    applyProperties(headerContent, headerContentStyles)
    headerContent.innerHTML = getBrowser()
    header.appendChild(headerContent)

    /**
     * Main Text
     */

    var mainContent = document.createElement('div')

    // Yeah, its pretty strange that its on one line. Oh well.
    mainContent.innerHTML = `Your internet connection is working fine.<br><br>
      No one replies to your emails because there is no one left.
      <br><br>(Refresh the page to exit from this hell.)`
    error.appendChild(mainContent)

    body.appendChild(bsodContainer)
  }

  init()
})()
