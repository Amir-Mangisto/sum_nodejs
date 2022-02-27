const httpServer = require('http').Server;
const util=require('util');
const fs =require('fs');
const readFilePromise = util.promisify(fs.readFile);

class event14 extends httpServer{
    constructor(){
        super()
        this.listen(8000)
        this.on('request',this.onHandler)
    }
    onHandler = (req,respond)=>{
        readFilePromise('./London.txt')
        .then((res)=>{respond.end(res)})
        .catch((req)=>{console.log("error");})
    }
}
module.exports =new event14();