export default function Sketch2(p5) {
  let lightgrey = p5.color('#D9DAD2')
  let darkgrey = p5.color('#BDBEB6')
  let yellow = p5.color('#F0B408')
  let red = p5.color('#E84540')
  let green = p5.color('#00822A')
  let blue = p5.color('#015EAC')
  let scale = 20
  let offsetX = 0
  let displacement = 0
  let cols, rows
  let canvas
  let incrementor = 0

  let strokeColours = [yellow, red, blue, green]
  let fillColours = [red, blue, green, yellow]
  let iterator = 0
  let w = p5.windowWidth * 0.25 + 30
  let h = p5.windowWidth * 0.25

  p5.setup = () => {
    canvas = p5.createCanvas(w, h)
    rows = h / scale
    cols = w / scale
    let incrementor = 0
  }

  p5.draw = () => {
    p5.background(fillColours[incrementor])

    p5.strokeWeight(4)

    p5.noFill()
    p5.stroke(strokeColours[incrementor])

    for (let y = 0; y < h; y += scale) {
      displacement += 0.000009
      offsetX = displacement

      p5.beginShape()
      p5.vertex(0, y)
      for (let x = 0; x < w; x += scale) {
        let noiseScale = p5.map(
          p5.noise(x * offsetX, (p5.mouseY / 10000) * y),
          0,
          1,
          0,
          20
        )
        p5.curveVertex(x, y + noiseScale)
      }
      offsetX += 0.02
      p5.vertex(w, y)
      p5.endShape()
    }
  }

  p5.mouseClicked = () => {
    incrementor++
    if (incrementor > 3) {
      incrementor = 0
    }
  }
}
