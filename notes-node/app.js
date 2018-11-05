
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const titleOptions={
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions={
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List All Notes')
    .command('read','Read a note', {
        title: titleOptions
    })
    .command('remove','Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
/* console.log('Command :', command);
console.log('Process :', process.argv);
console.log('Yargs :', argv);
 */


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        notes.logNote(note);
    } else {
        console.log('note not found');
    }
}
else if (command === 'remove') {
    var noteRemove = notes.removeNote(argv.title);
    var message = noteRemove ? 'note was removed' : 'note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}