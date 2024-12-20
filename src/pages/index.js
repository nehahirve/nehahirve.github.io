import React from 'react'
import Draggable from 'react-draggable'
import ToggleableWindowFrame from '../components/toggleable_window_frame'
import ErrorWindowList from '../components/error_window_list'
import ButtonHand from '../components/button_hand'
import Gif from '../components/gif'
import Devil from '../components/devil'
import Canvas from '../components/canvas'
import gif from '../../static/disaster.gif'

//import '../styles/reset.css'
//import '../styles/global.css'

export default function Home() {
  const yellow = '#F0B408'
  const red = '#E84540'
  const blue = '#015EAC'
  const green = '#00822A'

  return (
    <div className="application">
      <div className="background">
        <Draggable handle=".title">
          <div className="box no-cursor">
            <ToggleableWindowFrame
              id={'one'}
              color={yellow}
              innerText={`Greetings, internet explorer. I’m Neha Hirve.`}
              fontSize="5.2rem"
              width="35rem"
              height="31rem"
              windowHeading="INTRO.txt"
              isOpen={true}
            />
          </div>
        </Draggable>
        <ButtonHand />
        <Draggable handle=".title">
          <div className="box no-cursor">
            <ToggleableWindowFrame
              id={'p5'}
              color={'black'}
              innerText={''}
              fontSize="4.3rem"
              width="25vw"
              height="27.2vw"
              windowHeading="P5.js"
              isOpen={true}
            />
          </div>
        </Draggable>
        <Draggable handle=".title">
          <div className="box no-cursor">
            <ToggleableWindowFrame
              id={'two'}
              color={green}
              innerText={
                <>
                  I used to be a{' '}
                  <a href="https://nehahirve.github.io/photography">
                    visual storyteller
                  </a>{' '}
                  and sometimes-indie-
                  <a href="https://nehahirve.github.io/lavamouse/">poster-maker</a>.
                </>
              }
              fontSize="4.3rem"
              width="35rem"
              height="31rem"
              windowHeading="STORY.html"
              isOpen={true}
            />
          </div>
        </Draggable>
        <Draggable handle=".title">
          <div className="box no-cursor">
            <ToggleableWindowFrame
              id={'three'}
              color={blue}
              innerText={
                <>
                  But then {' '}
                   <span className="hover-container">
                   <a href="">2020 broke stuff</a>
            <img
              src={gif}
              className="hover-gif"
            />
          </span>
                  <Gif />
                </>
              }
              fontSize="4.2rem"
              width="35rem"
              height="31rem"
              windowHeading="COVID.exe"
              isOpen={true}
            />
          </div>
        </Draggable>
        <ErrorWindowList
          id={'error-one'}
          errorName="Error!"
          innerText="What is the nature of reality?"
          buttonText={['IDK']}
          width="20rem"
        />
        <Draggable handle=".title">
          <div className="box no-cursor">
            <ToggleableWindowFrame
              id={'four'}
              color={yellow}
              innerText={
                <>
                  So I learnt to code. First I made stuff{' '}
                  <a href="https://nehahirve.github.io/audiosun/">for myself</a>. 
                </>
              }
              fontSize="3.4rem"
              width="35rem"
              height="31rem"
              windowHeading="PIVOT.txt"
              isOpen={true}
            />
          </div>
        </Draggable>
        <section id="work">
          <Draggable handle=".title">
            <div className="box no-cursor">
              <ToggleableWindowFrame
                id={'five'}
                color={yellow}
                innerText={
                  <>
                    Then I{' '}
                    <a href="https://open-shop-x-fun-crew.github.io/">
                      made stuff for other humans
                    </a>
                    .
                  </>
                }
                fontSize="3.6rem"
                width="25rem"
                height="20rem"
                windowHeading="WORK.txt"
                isOpen={true}
              />
            </div>
          </Draggable>

          <Draggable handle=".title">
            <div className="box no-cursor">
              <ToggleableWindowFrame
                id={'six'}
                color={blue}
                innerText={
                  <>
                    Then I worked in a{' '}
                    <a href="https://www.klarna.com/international/press/klarna-makes-shopping-more-rewarding/">
                      large company
                    </a>
                    .
                  </>
                }
                fontSize="3.6rem"
                width="25rem"
                height="25rem"
                windowHeading="$$$.txt"
                isOpen={true}
              />
            </div>
          </Draggable>

          <Draggable handle=".title">
            <div className="box no-cursor">
              <ToggleableWindowFrame
                id={'seven'}
                color={green}
                innerText={
                  <>
                    Now I <a href="https://www.alextherapeutics.com/therapy-companions"> make apps</a> in a tiny one.
                  </>
                }
                fontSize="3.6rem"
                width="25rem"
                height="25rem"
                windowHeading="Start.up"
                isOpen={true}
              />
            </div>
          </Draggable>
        </section>
        <ErrorWindowList
          id={'error-two'}
          errorName="Not an Error!"
          innerText="Here's a link to ALL OF THE STUFF 0_0"
          buttonText={['MUCH WOW']}
          width="25rem"
        />
        <Draggable handle=".title">
          <div className="box no-cursor">
            <ToggleableWindowFrame
              id={'eight'}
              color={green}
              innerText={
                <>
                  I’m interested in how the internet can emulate IRL
                  experiences, design-driven development, web animation, and{' '}
                  <a href="https://escapefromhyperisland.github.io/pleasantville/level-6">games</a>.
                  I also{' '}
                  <a href="https://www.huckmag.com/art-and-culture/photography-2/tornado-alley-america-neha-hirve-photography-wild-hunt/">
                    chase tornadoes
                  </a>
                  , have lived in 5 countries and a{' '}
                  <a href="https://www.npr.org/sections/pictureshow/2019/10/20/737787659/activists-occupy-an-ancient-forest-in-germany-to-save-it?t=1604566479839">
                    treehouse,{" "}
                  </a>
                  but these days I climb rocks instead of trees.
                </>
              }
              fontSize="3.6rem"
              width="80vw"
              height="25rem"
              windowHeading="about.me"
              isOpen={true}
            />
          </div>
        </Draggable>
        <ErrorWindowList
          id={'error-three'}
          errorName="Anyway, please hire me (or just be my friend)!"
          innerText="I don’t bite unless
        it’s the full moon."
          buttonText={['GITHUB', 'LINKEDIN', 'INSTA', 'EMAIL']}
          width="30rem"
        />
        <Draggable handle=".title">
          <div className="box no-cursor">
            <ToggleableWindowFrame
              id={'nine'}
              color={red}
              innerText={
                <>
                  Now here’s some Tetris so you never have to leave!
                  <br />
                  <br />
                  <Devil />
                </>
              }
              fontSize="1rem"
              width="20rem"
              height="15rem"
              windowHeading="LOL.jk"
              isOpen={true}
            />
          </div>
        </Draggable>
        <Canvas />
      </div>
    </div>
  )
}
