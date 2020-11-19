import React from 'react'
import Draggable from 'react-draggable'
import ToggleableWindowFrame from '../components/toggleable_window_frame'
import ErrorWindowList from '../components/error_window_list'
import ButtonHand from '../components/button_hand'
import Gif from '../components/gif'
import Devil from '../components/devil'
import Canvas from '../components/canvas'

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
                  <a href="https://lavamousestudios.com/">poster-maker</a>.
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
                  But then 2020{' '}
                  <a href="https://www.boredpanda.com/2020-year-recap/?utm_source=google&utm_medium=organic&utm_campaign=organic">
                    broke
                  </a>{' '}
                  stuff.
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
                  Now I’m studying web development at{' '}
                  <a href="https://www.hyperisland.com/">Hyper Island</a> in
                  Stockholm. Luckily I love to code.
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
                    Here’s some{' '}
                    <a href="https://nehahirve.github.io/audiosun/">stuff</a> I
                    made.
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
                    Here’s some{' '}
                    <a href="https://github.com/nehahirve/criterion">
                      more stuff
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
                id={'seven'}
                color={green}
                innerText={
                  <>
                    Here’s the{' '}
                    <a href="https://nehahirve.github.io/mothership/">
                      first stuff
                    </a>{' '}
                    I made with other humans.
                  </>
                }
                fontSize="3.6rem"
                width="25rem"
                height="25rem"
                windowHeading="WORK.txt"
                isOpen={true}
              />
            </div>
          </Draggable>
        </section>
        <ErrorWindowList
          id={'error-two'}
          errorName="Not an Error!"
          innerText="I even made this JAMStack site with Gatsby 0_0"
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
                  <a href="https://nehahirve.github.io/platformgame/">games</a>.
                  I’m teaching myself ReactJS and Node.js (b/c backend is the
                  new black). I also{' '}
                  <a href="https://www.huckmag.com/art-and-culture/photography-2/tornado-alley-america-neha-hirve-photography-wild-hunt/">
                    chase tornadoes
                  </a>
                  , have lived in 5 countries and a{' '}
                  <a href="https://www.npr.org/sections/pictureshow/2019/10/20/737787659/activists-occupy-an-ancient-forest-in-germany-to-save-it?t=1604566479839">
                    treehouse
                  </a>
                  , and enjoy watching{' '}
                  <a href="https://youtu.be/2BmGMi0IEx4">this man</a> restore
                  retro game consoles on YouTube.
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
