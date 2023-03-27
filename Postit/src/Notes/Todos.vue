<!-- <template>
    <div class="box-border md:box-content">
        <div>
            <div v-for="todo in allTodos" :key="todo" class="todo">{{ todo.title }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapActions} from 'vuex';
export default {
    name: "Todos",
    methods: {
        ...mapActions(['getNotes'])
    },
    computed: mapGetters(["allTodos"]),
    created(){
        this.getNotes();
    }
} 
</script>
 -->
<!-- /* data() {
    return {
      task: "",
      desc: "",
      tasks: [],
      togglenote: true,
      shownote: false,
      addnotes: true,
    };
  },
  mounted() {
    this.getNotes();
  },
  updated() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      axios.get("https://post-it-7m1i.onrender.com/notes").then((res) => {
        this.tasks = res.data.notes;
      });
    },
    addnote() {
      this.shownote = !this.shownote;
    },
    deleteNote(index) {
      if (confirm("Are you sure you want to delete this note?")) {
        let noteId = this.tasks[index]._id;
        axios
          .delete(`https://post-it-7m1i.onrender.com/notes/${noteId}`)
          .then((res) => {
            this.tasks.splice(index, 1);
          });
      }
    },
    submitNote() {
      if (this.task.length == 0 || this.desc.length == 0) {
        return;
      }
      axios.post("https://post-it-7m1i.onrender.com/notes", {
        title: this.task,
        content: this.desc,
      });

      this.shownote = !this.shownote;
      this.task = "";
      this.desc = "";
    },
  },
};
</script>


  data() {
    return {
      task: "",
      desc: "",
      tasks: [],
      togglenote: true,
      shownote: false,
      addnotes: true,
    };
  },
  mounted() {
    this.getNotes();
  },
  updated() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      axios.get("https://post-it-7m1i.onrender.com/notes").then((res) => {
        this.tasks = res.data.notes;
      });
    },
    addnote() {
      this.shownote = !this.shownote;
    },
    deleteNote(index) {
      if (confirm("Are you sure you want to delete this note?")) {
        let noteId = this.tasks[index]._id;
        axios
          .delete(`https://post-it-7m1i.onrender.com/notes/${noteId}`)
          .then((res) => {
            this.tasks.splice(index, 1);
          });
      }
    },
    submitNote() {
      if (this.task.length == 0 || this.desc.length == 0) {
        return;
      }
      axios.post("https://post-it-7m1i.onrender.com/notes", {
        title: this.task,
        content: this.desc,
      });

      this.shownote = !this.shownote;
      this.task = "";
      this.desc = "";
    },
  },
};
</script>

 */ -->