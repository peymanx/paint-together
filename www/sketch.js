let socket;
function setup() {
  createCanvas(windowWidth, windowHeight);
  socket = io.connect('http://localhost:3000/')

  socket.on('connect', (s) => {
    console.log("I'm also connected");
  })


  socket.on('mouseDragging', (data) => {
    fill('black')
    noStroke()
    circle(width - data.x, data.y, 30)
  })

  socket.on('clean', () => {

    background(220);
  })

}

function draw() {


}

function mouseDragged() {
  fill('red')
  noStroke()
  circle(mouseX, mouseY, 30)

  socket.emit('mouseDragged', { x: mouseX, y: mouseY })
}