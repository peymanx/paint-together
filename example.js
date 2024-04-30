
const EventEmiter = require('events');

let myEvent = new EventEmiter();

myEvent.on('shab',()=>{
    console.log('shab bekheir');
    console.log('turn on the lights');
    console.log('dark mode enabled');
})

myEvent.on('new weight',(w)=>{
    // call api
    // save on db
    console.log('⚖️:', w.toFixed(1)+'kg');
})

//-----------------------------------------

let now = new Date()
if(now.getHours(19))
    myEvent.emit('shab')

setInterval(()=>{
    let weight= Math.random()*1000
myEvent.emit('new weight',weight )
},2000)

