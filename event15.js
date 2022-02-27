const httpServer = require('http').Server;
const fs =require('fs');

class Event15 extends httpServer{
    constructor(){
        super();
        this.listen(3002)
        this.on('request',this.onHandler)
    }
    onHandler = (req,respond)=>{
      const stream = fs.createReadStream('./event15.json')
      stream.pipe(respond)
    }
}
module.exports =new Event15()