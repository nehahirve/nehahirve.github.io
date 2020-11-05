export default function Sketch(p5) {
  let canvas

  let w = p5.windowWidth * 0.25
  let h = p5.windowWidth * 0.25

  p5.setup = () => {
    canvas = p5.createCanvas(w, h)
  }

  let yMovement = 0
  var x = 0
  var y = 0

  let ticker = 0

  p5.draw = () => {
    p5.fill(p5.color('#015EAC'))
    ticker++
    yMovement += 1
    x += 10
    y += 5

    p5.background(p5.color('#015EAC'))
    p5.fill(p5.color('#E84540'))

    for (let i = 100; i >= 0; i--) {
      p5.rect(0, (p5.height / i) * 4 - 32, p5.width, i)
    }

    p5.fill(p5.color('#015EAC'))
    p5.triangle(
      p5.width / 2,
      p5.height / 2 - p5.height / 5,
      p5.width / 2 + p5.width / 4,
      p5.height / 2 + p5.height / 4,
      p5.width / 2 - p5.width / 4,
      p5.height / 2 + p5.height / 4
    )

    if (ticker > 10) {
      // p5.clear()

      p5.background(p5.color(' #015EAC'))
      p5.fill(p5.color('#E84540'))
      for (let i = 100; i >= 0; i--) {
        p5.rect(
          0,
          ((p5.height / i) * 4 - 32) * yMovement,
          p5.width,
          i - yMovement
        )
      }
      p5.fill(y - 280, x / 50, y - 280 - x / 20)
      p5.fill(p5.color('#BDBEB6'))
      p5.triangle(
        p5.width / 2,
        p5.height / 2 - p5.height / 5,
        p5.width / 2 + p5.width / 4,
        p5.height / 2 + p5.height / 4,
        p5.width / 2 - p5.width / 4,
        p5.height / 2 + p5.height / 4
      )
    }
  }
}
