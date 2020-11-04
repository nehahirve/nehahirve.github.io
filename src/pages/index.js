import React from 'react'
import Draggable from 'react-draggable'
import WindowFrame from '../components/window_frame'
import ErrorWindow from '../components/error_window'
import Gif from '../components/gif'
import Devil from '../components/devil'

export default function Home() {
  const yellow = '#F0B408'
  const red = '#E84540'
  const blue = '#015EAC'
  const green = '#00822A'

  return (
    <div className="background">
      <Draggable handle=".title">
        <div className="box no-cursor">
          <WindowFrame
            id={'one'}
            color={yellow}
            innerText={`Greetings, internet explorer. I’m Neha Hirve.`}
            fontSize="6rem"
            width="35rem"
            height="31rem"
            windowHeading="INTRO.txt"
          />
        </div>
      </Draggable>

      <Draggable handle=".title">
        <div className="box no-cursor">
          <WindowFrame
            id={'p5'}
            color={'black'}
            innerText={''}
            fontSize="4.3rem"
            width="25rem"
            height="25rem"
            windowHeading="P5.js"
          />
        </div>
      </Draggable>

      <Draggable handle=".title">
        <div className="box no-cursor">
          <WindowFrame
            id={'two'}
            color={green}
            innerText={
              <>
                I used to be a{' '}
                <a href="https://nehahirve.github.io/">visual storyteller</a>{' '}
                and sometimes-indie-
                <a href="https://lavamousestudios.com/">poster-maker</a>.
              </>
            }
            fontSize="4.3rem"
            width="35rem"
            height="31rem"
            windowHeading="STORY.html"
          />
        </div>
      </Draggable>

      <WindowFrame
        id={'three'}
        color={blue}
        innerText={
          <>
            But then 2020 broke stuff.
            <Gif />
          </>
        }
        fontSize="4.3rem"
        width="35rem"
        height="31rem"
        windowHeading="COVID.exe"
      />

      <ErrorWindow
        id={'error-one'}
        errorName="Error!"
        innerText="What is the nature of reality?"
        buttonText={['IDK']}
        width="20rem"
      ></ErrorWindow>

      <WindowFrame
        id={'four'}
        color={yellow}
        innerText={`Now I’m studying web development at Hyper Island in Stockholm. Luckily I love to code.`}
        fontSize="3.8rem"
        width="35rem"
        height="31rem"
        windowHeading="PIVOT.txt"
      />
      <section id="work">
        <WindowFrame
          id={'five'}
          color={yellow}
          innerText={`Here’s some stuff I made.`}
          fontSize="3.8rem"
          width="25rem"
          height="25rem"
          windowHeading="WORK.txt"
        />
        <WindowFrame
          id={'six'}
          color={blue}
          innerText={`Here’s some more stuff.`}
          fontSize="3.8rem"
          width="25rem"
          height="25rem"
          windowHeading="WORK.txt"
        />
        <WindowFrame
          id={'seven'}
          color={green}
          innerText={`Here’s the first stuff I made with other humans.`}
          fontSize="3.8rem"
          width="25rem"
          height="25rem"
          windowHeading="WORK.txt"
        />
      </section>

      <ErrorWindow
        id={'error-two'}
        errorName="Not an Error!"
        innerText="I even made this JAMStack site with Gatsby 0_0"
        buttonText={['MUCH WOW']}
        width="25rem"
      ></ErrorWindow>

      <WindowFrame
        id={'eight'}
        color={green}
        innerText={`I’m interested in how the internet can emulate IRL experiences, design-driven development, web animation, and games. I’m teaching myself ReactJS and Node.js (b/c backend is the new black). 

        I also chase tornadoes, have lived in 5 countries and a treehouse, and enjoy watching this man restore retro game consoles on YouTube.`}
        fontSize="3.6rem"
        width="80vw"
        height="25rem"
        windowHeading="about.me"
      />

      <ErrorWindow
        id={'error-three'}
        errorName="Anyway, please hire me (or just be my friend)!"
        innerText="I don’t bite unless
        it’s the full moon."
        buttonText={['GITHUB', 'LINKEDIN', 'INSTA', 'EMAIL']}
        width="30rem"
      ></ErrorWindow>

      <WindowFrame
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
      />
      <canvas></canvas>
    </div>
  )
}
