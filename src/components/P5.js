import React, { Component } from 'react'
import { loadableP5 as P5Wrapper } from './loadable'
import Sketch2 from './sketch_2'

export default class App extends Component {
  render() {
    return <P5Wrapper sketch={Sketch2} />
  }
}
