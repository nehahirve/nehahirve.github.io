import React from 'react'
import WindowFrame from '../components/window_frame'
import ErrorWindow from '../components/error_window'
import Draggable from 'react-draggable'

export default function Home() {
  return (
    <div className="background">
      <Draggable>
        <WindowFrame
          id={'one'}
          color={'#F0B408'}
          innerText={`Greetings, internet explorer. I’m Neha Hirve.`}
          fontSize="6rem"
          width="35rem"
          height="31rem"
          windowHeading="INTRO.txt"
        />
      </Draggable>

      <WindowFrame
        id={'two'}
        color={'#00822A'}
        innerText={`I used to be a visual storyteller and sometimes-indie-poster-maker.`}
        fontSize="4.3rem"
        width="35rem"
        height="31rem"
        windowHeading="STORY.html"
      />

      <WindowFrame
        id={'three'}
        color={'#015EAC'}
        innerText={`But then 2020 broke stuff.`}
        gif={true}
        fontSize="4.3rem"
        width="35rem"
        height="31rem"
        windowHeading="CRASH.exe"
      />

      <ErrorWindow
        id={'error-one'}
        errorName="Error!"
        innerText="What is the nature of reality?"
        buttonText="IDK"
        width="20rem"
      ></ErrorWindow>

      <WindowFrame
        id={'four'}
        color={'#F0B408'}
        innerText={`Now I’m studying web development at Hyper Island in Stockholm. Luckily I love to code.`}
        fontSize="3.8rem"
        width="35rem"
        height="31rem"
        windowHeading="PIVOT.txt"
      />
      <section id="work">
        <WindowFrame
          id={'five'}
          color={'#F0B408'}
          innerText={`Here’s some stuff I made.`}
          fontSize="3.8rem"
          width="25rem"
          height="25rem"
          windowHeading="WORK.txt"
        />
        <WindowFrame
          id={'six'}
          color={'#015EAC'}
          innerText={`Here’s some more stuff.`}
          fontSize="3.8rem"
          width="25rem"
          height="25rem"
          windowHeading="WORK.txt"
        />
        <WindowFrame
          id={'seven'}
          color={'#00822A'}
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
        buttonText="MUCH WOW"
        width="25rem"
      ></ErrorWindow>

      <WindowFrame
        id={'eight'}
        color={'#00822A'}
        innerText={`I’m interested in how the internet can emulate IRL experiences, design-driven development, web animation, and games. I’m teaching myself ReactJS and Node.js (b/c backend is the new black). 

        I also chase tornadoes, have lived in 5 countries and a treehouse, and enjoy watching this man restore retro game consoles on YouTube.`}
        fontSize="3.6rem"
        width="80vw"
        height="25rem"
        windowHeading="about.me"
      />

      <WindowFrame
        id={'nine'}
        color={'#E84540'}
        innerText={`Now here’s some Tetris so you never have to leave!`}
        fontSize="1rem"
        width="20rem"
        height="15rem"
        windowHeading="about.me"
      />

      <section>
        <p>
          Anyway, please hire me (or just be my friend)! I don’t bite unless
          it’s the full moon.
        </p>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Instagram</li>
          <li>Email</li>
        </ul>
      </section>
      <canvas></canvas>
    </div>
  )
}
