const express = require('express')
const {say} = require('cowsay')
const socketio = require('socket.io')
const qr = require('qrcode');

const app =express()
const port = 3000


const server = app.listen(port, function(){
    console.log('Server running at http://localhost:'+ port);
})

const io = socketio(server)

io.sockets.on('connection', socket=>{
    let banner = say({
        text: socket.id + " connected!",
        f: "tux"
    })


    console.log(banner);

    io.emit('clean');

    socket.on('mouseDragged', (mouse)=>{
        socket.broadcast.emit('mouseDragging', mouse)});
       
})

app.use('/', express.static('./www'));


app.get('/', function(req, res){
    res.send('<h1>Welcome! 🤪</h1> <marquee direction="right"> سرور در حال اجرا است</marquee>');
})

