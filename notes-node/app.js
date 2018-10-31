console.log('starting app.js');

const fs = require('fs');
const os=require('os');
const _=require('lodash');
const notes=require('./notes');

//console.log(_.isString(true));
//console.log(_.isString("true"));

var filterArray=_.uniq(['test1',1,'test1',1,2,3,4]);
console.log(filterArray);
//var res=notes.add(9,-2);
//console.log(res);


//var user=os.userInfo();

// fs.appendFile('greetings.txt',`hello ${user.username} you are ${notes.age} !` , (err) => {
//     if (err) {
//         console.log('unable to write to file');
//     }
// });

