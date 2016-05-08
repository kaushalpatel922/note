import axios from 'axios';

const AjaxHelpers = {
  getAllNotes: function() {
    return axios.get('http://localhost:3000/notes.json');
  },

  addNote: function(data) {
    console.log("data", data);
    let object = {
      content: data,
      dateCreated: new Date(),
    };
    return axios.post('http://localhost:3000/notes', data);
  },

  deleteNote: function(id) {
    console.log("data",data);
    return axios.delete('http://localhost:3000/notes/' + id);
  }

};

export default AjaxHelpers;
