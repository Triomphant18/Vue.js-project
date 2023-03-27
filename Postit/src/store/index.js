import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    notes: [],
  },
  getters: {
    allNotes: (state) => state.notes,
  },
  actions: {
    async getNotes({ commit }) {
      const res = await axios.get("https://post-it-7m1i.onrender.com/notes");
      commit('setNotes', res.data.notes.reverse())
    },
    async submitNote({ commit, dispatch }, loadnote) {
      const res = await axios.post("https://post-it-7m1i.onrender.com/notes", loadnote)
      commit('newPost', res.data);
      dispatch('getNotes'); // dispatch the getNotes action to update the notes list after submitting a new note
    },
    async deleteNote({ commit, dispatch }, id) {
      if (confirm("Are you sure you want to delete this note?")) {
        await axios.delete(`https://post-it-7m1i.onrender.com/notes/${id}`);
        commit('removeNote', id);
      }
    },
    async updateNote({ commit }, updNote) {
      const res = await axios.put(`https://post-it-7m1i.onrender.com/notes/${updNote.id}`,
        { title: updNote.title, content: updNote.content} );
      // commit('updNote', updNote)
    }
  },
  mutations: {
    setNotes: (state, notes) => state.notes = notes,
    newPost: (state, note) => state.notes.push(note),
    removeNote: (state, id) => state.notes = state.notes.filter(note => note.id != id),
    updateNote: (state, updNote) => {
      const index = state.notes.findIndex(note => note.id === updNote.id);
      if (index !== -1) {
        state.notes.splice(index, 1, updNote);
      }
    },
  },
  modules: {
  }
})
