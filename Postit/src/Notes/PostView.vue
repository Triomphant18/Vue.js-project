<template>
  <div class="container mx-auto" style="padding: 0%">
    <div class="myflex" style="display: flex; position: relative; ">
      <div style="float: left">
        <router-link :to="{ name: 'home' }">
          <img
            src="../assets/forward.png"
            class="back"
            style="width: 120px"
            alt="Backward Icon"
          />
        </router-link>
      </div>
      <div style="position: absolute; right: 0">
        <router-link :to="{ name: 'home' }">
          <img
            @click="deleteNote(this.note._id)"
            src="../assets/delete.png"
            alt="Delete Icon"
            style="width: 120px"
          />
        </router-link>
      </div>
    </div>
    <div style="margin: 5%">
      <span style="font-size: 3em">Edit</span>
      <br />
      <span>Title</span>
      <h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          v-model="this.note.title"
        ></textarea>
        <!-- <input class="input" type="text" v-model="this.note.title" /> -->
      </h2>
      <br />
      <br />
      <div class="description">
        <span>Description</span>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="this.note.content"
        ></textarea>
      </div>
    </div>
    <div class="flex">
      <div style="align-content: center">
        <router-link :to="{ name: 'home' }">
          <img
            @click="submitNote()"
            src="../assets/approval.png"
            class="approved"
            alt="Approve Icon"
            style="width: 100px"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      shownote: false,
      desc: "",
      note: [],
      title: "",
      content: "",
      curNote: this.$route.params.id,
    };
  },
  name: "Notes",
  mounted() {
    this.getNotes();
    this.display();
    this.Note();
  },
  updated() {
    this.getNotes();
  },
  methods: {
    ...mapActions(["getNotes", "submitNote", "deleteNote", "updateNote"]),
    addNote() {
      this.shownote = !this.shownote;
    },
    async Note() {
      axios
        .get(`https://post-it-7m1i.onrender.com/notes/${this.curNote}`)
        .then((res) => {
          this.note = res.data;
        });
    },
    display() {
      this.title = this.note.title;
      this.content = this.note.content;
    },

    submitNote() {
      this.updateNote({
        id: this.note._id,
        title: this.note.title,
        content: this.note.content,
      });
    },
  },
  computed: {
    ...mapGetters(["allNotes"]),
  },
};
</script>