const EventEmitter = require('events')
const fs =require('fs');

class Event11 extends EventEmitter{
    constructor(){
        super()
        this.on('event11',this.onEvent11)
    }
    onEvent11(fileName){
        fs.writeFile(fileName,"im listening",()=>{})
    }
    emitEvent11(fileName){
        this.emit('event11',fileName)
    }
}
module.exports = new Event11()