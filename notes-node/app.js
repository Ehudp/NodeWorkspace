console.log('starting app.js');

const fs = require('fs');
const os=require('os');
const notes=require('./notes');

var res=notes.add(9,-2);
console.log(res);


//var user=os.userInfo();

// fs.appendFile('greetings.txt',`hello ${user.username} you are ${notes.age} !` , (err) => {
//     if (err) {
//         console.log('unable to write to file');
//     }
// });

