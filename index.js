//צרו קובץ JS , בתוכו, רוצו בלולאה 15 פעמים והדפיסו מספרים זוגייים החל מ 0.
// let i=0;
// while (i<15) {
//     if (i % 2 == 0 ) {
//         console.log(i);
//     }
//     i++
// }

//צרו מערך של 10 מספרים רנדומליים מ 0 עד 10 והדפיסו רק את האי-זוגיים.

// let rndArr = [
//     Math.floor(Math.random()*10),Math.floor(Math.random()*10),
//     Math.floor(Math.random()*10),Math.floor(Math.random()*10),
//     Math.floor(Math.random()*10),Math.floor(Math.random()*10),
//     Math.floor(Math.random()*10),Math.floor(Math.random()*10),
//     Math.floor(Math.random()*10),Math.floor(Math.random()*10)
// ];
// for (let i = 0; i < rndArr.length; i++) {
//     if(rndArr[i] %2 ==0){
//         console.log(rndArr[i]);
//     }
// }

class Kid {
  firstName;
  age;
  grade;
  constructor(firstName, age, grade) {
    this.firstName = firstName;
    this.age = age;
    this.grade = grade;
  }
}
const kid1 = new Kid("aaa", 12, 12);
const fs = require("fs");
const { json } = require("stream/consumers");
// fs.writeFile('./kid.json',JSON.stringify(kid1) ,()=>{});

// let kidsArray = [
// new Kid("aaa", 12, 12),
// new Kid("bbb", 13, 11),
// new Kid("ccc", 14, 12),
// ]
// fs.writeFile('./kidsArray.json',JSON.stringify(kidsArray),()=>{})

// fs.readFile('./kidsArray.json',(err,res)=>{
//   if(err){console.log("error");}
//   let data=JSON.parse(res)
//   for (let i = 0; i < data.length; i++) {
//       if (data[i].grade > 7) {
//         console.log(data[i]);
//       }    
//   }
// })


//9
// let randomArr = [];
// for (let i = 0; i < 100; i++) {
//       let rnd=Math.floor(Math.random()*100);
//       randomArr.push(rnd)
// }
// fs.writeFile('kidsArr.txt',randomArr.toString(),()=>{})
// fs.readFile('./kidsArr.txt',(err,res)=>{
//   let x = res.toString().split(",")
//   x.forEach((item)=>{
//     if(item>50){
//       console.log(item);
//     }
//   })
// })

//11
const event11 = require('./event11.js')
event11.emitEvent11('event11.txt')
//12
const event12=require('./event12')
event12.emitHandler('event12.txt',"shalom")
//13
const event13 = require('./event13')
event13.emitHandler(["aa","aad","klv","hjc"])
//14
require('./event14')
//15 
require('./event15')