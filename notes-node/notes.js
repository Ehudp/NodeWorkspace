console.log('starting notes.js');

//console.log(module);

module.exports.add=(num1,num2)=>{
    return num1+num2;
};

module.exports.addNote = () => {
    console.log('add note');
    return 'new note';
};

