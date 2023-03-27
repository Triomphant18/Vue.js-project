<template>
  <div class="box-border md:box-content">
    <div>
      <ul>
        <div class="add" v-if="!shownote">
          <li>
            <div class="description add">
              <img
                class="iconplus"
                src="../assets/iconsplus.png"
                alt="Forward Icone"
                @click="addNote"
              />
            </div>
          </li>
        </div>
        <div class="note" v-if="shownote">
          <li>
            <h2>
              <input
                v-model="note"
                class="hide h2"
                type="text"
                placeholder="Add the title"
                size="16"
              />
            </h2>
            <br />
            <div class="hide">
              <textarea
                v-model="desc"
                name=""
                id=""
                cols="24"
                rows="4"
                class="areadescription"
                placeholder="Add a description"
              ></textarea>
            </div>
            <div class="flex">
              <img
                src="../assets/forward.png"
                class="backward"
                alt="Backward Icone"
                @click="addNote"
              />
              <div>
                <img
                  @click="onSubmit()"
                  src="../assets/approval.png"
                  class="approuved"
                  alt="Forward Icone"
                />
              </div>
            </div>
          </li>
        </div>

        <ul v-if="allNotes.length > 0">
          <li v-for="note in allNotes" :key="note._id">
            <h2>
              {{
                note.title.length > 12
                  ? note.title.substring(0, 12) + "..."
                  : note.title
              }}
            </h2>
            <div
              class="description"
              v-for="(noteline, i) in note.content"
              :key="i"
            >
              {{
                noteline.length > 120
                  ? noteline.substring(0, 120) + "..."
                  : noteline
              }}
            </div>
            <div class="flex">
              <div>
                <router-link :to="{ name: 'detail', params: { id: note._id } }">
                  <img src="../assets/forward.png" alt="Forward Icone" />
                </router-link>
              </div>
              <div>
                <img
                  @click="deleteNote(note._id)"
                  class="delete"
                  src="../assets/delete.png"
                  alt="Forward Icone"
                />
              </div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<script>
import PostViewVue from '@/Notes/PostView.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  components: {PostViewVue, mapGetters},
  data() {
    return {
      shownote: false,
      desc: "",
      note: "",
    };
  },
  name: "Notes",
  mounted() {
    this.getNotes();
  },
  updated() {
    this.getNotes();
  },
  methods: {
    ...mapActions(["getNotes", "submitNote", "deleteNote", "updateNote"]),

    addNote() {
      this.shownote = !this.shownote;
    },

    async onSubmit() {
      this.shownote = !this.shownote;
      if (this.note === "" || this.desc.trim() === "") {
        return;
      }
      await this.submitNote({
        title: this.note,
        content: this.desc,
      });
      this.note = "";
      this.desc = "";
    },
  },
  computed: {
    ...mapGetters(["allNotes"]),
  },
};
</script>