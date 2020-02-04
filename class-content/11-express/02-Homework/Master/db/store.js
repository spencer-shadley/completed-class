const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  constructor() {
    this.lastId = 0;
  }

  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }

  async getNotes() {
    const notes = await this.read();
    let parsedNotes;
    // If notes isn't an array or can't be turned into one send back a new empty array
    try {
      parsedNotes = [].concat(JSON.parse(notes));
    } catch (err) {
      console.error(err);
      parsedNotes = [];
    }
    return parsedNotes;
  }

  async addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }

    // Increment `this.lastId` and assign it to `newNote.id`
    const newNote = { title, text, id: Math.random() };

    // Get all notes, add the new note, write all the updated notes, return the newNote
    const notes = await this.getNotes();
    const updatedNotes = [...notes, newNote];
    await this.write(updatedNotes);
    return newNote;
  }

  async removeNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    const notes = await this.getNotes();
    const filteredNotes = notes.filter(note => note.id !== parseFloat(id));
    return await this.write(filteredNotes);
  }
}

module.exports = new Store();
