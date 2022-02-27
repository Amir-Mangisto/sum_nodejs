const EventEmitter = require('events');
const fs = require('fs');

class Event13 extends EventEmitter{
    constructor(){
        super();
        this.on('event13',this.onHandler)
    }
    onHandler(namesArr){
        fs.writeFile('./namesArr.json',JSON.stringify(namesArr),()=>{})
    }
    emitHandler(namesArr){
        this.emit('event13',namesArr)
    }
}
module.exports =new Event13()