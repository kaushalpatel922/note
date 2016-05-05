import axios from 'axios';

const AjaxHelpers = {
  getAllNotes: function() {
    return axios.get('http://localhost:3000/notes');
  },

  addNote: function(data) {
    console.log("data", data);
    let object = {
      content: data,
      dateCreated: new Date(),
    };
    return axios.post('http://localhost:3000/notes/new', object);
  },

  editNote: function(newNote, oldNote) {
    console.log("newNote", newNote)
    console.log("oldNote", OldNote)
    let oldNote = data.oldNote;
    let newNote = {
      content: data.newNote
    };
    return axios.put("http://localhost:3000/notes" + oldNote, newNote);
  },

  deleteNote: function(data) {
    console.log("data",data);
    return axios.delete('http://localhost:3000/notes/delete' + data);
  }

}

export defauly AjaxHelpers;
