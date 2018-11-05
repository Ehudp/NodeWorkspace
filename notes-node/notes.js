
const fs = require('fs');

const fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }


};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {

    var notes = [];
    var note = {
        title, body
    };

    notes = fetchNotes();

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };

};

const getAll = () => {
    return fetchNotes();
};
const getNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title === title);
    return filterNotes[0];
};
const removeNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterNotes);
    return notes.length !== filterNotes.length;
};

var logNote=(note)=>{
   
    console.log('---');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

