const express= require('express')
const app = express();
const port = 4040;

app.listen(port);

app.get('/',(req,res)=>{
    res.send('server online')
})

app.get('/hello',(request,respond)=>{
    respond.send('hello')
})
app.get('/users',(request,respond)=>{
    let users=["mango","shiber","admaso","belay","seamy"]
    respond.send(users.toString())
})
app.get('/ages',(request,respond)=>{
    let arr=[];
    for (let i = 0; i < 100; i++) {
        let rnd=Math.floor(Math.random()*100)
        arr.push(rnd)        
    }
    respond.send(arr.toString())
})
app.get('/rndNumbers',(request,respond)=>{
    let rndArr=[];
    for (let i = 0; i < 10; i++) {
    let random=Math.floor(Math.random()*100);
    rndArr.push(random);        
    }
    let result=Math.max(rndArr);
    respond.send();
})