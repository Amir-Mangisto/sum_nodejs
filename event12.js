const EventEmitter =require('events');
const fs=require('fs');

class Event12 extends EventEmitter{
    constructor(){
        super();
        this.on('event12',this.onHandler)
    }
    onHandler(file,data){
        fs.writeFile(file,data,()=>{})
    }
    emitHandler(file,data){
        this.emit('event12',file,data)
    }
}
module.exports  = new Event12();