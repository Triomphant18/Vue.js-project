<template>
    <!-- <router-link to=""></router-link> -->
    <router-view />
    
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
/* import Cadran from "./components/Cadran.vue";
export default { components: { Cadran },
data() {
  return {
    shownote : false,
    addnotes : true,
  }
},
methods: {
    addnote(){
      this.shownote = !this.shownote;
    },
    editnote(){
      console.log("Hello");
    }
  }
} */
</script>


<!-- <template>
  <RouteView> </RouteView>
  <div class="box-border md:box-content">
    <ul>
      <Cadran />    
      <Cadran />
      <Cadran />
      <div>
        <div class="add" v-if ='!shownote'>
          <li>
            <div class="description add" >
              <img
                class="iconplus"
                src="./assets/iconsplus.png"
                alt="Forward Icone"
                @click="addnote"
              />
            </div>
          </li>
        </div>
        <div class="note" v-if="shownote">
          <li>
            <h2>
              <input class="hide h2" type="text" placeholder="Add the title" size = "11" />
            </h2>
            <p><input class="hide p" type="text" placeholder="subTitle" size = "16"/></p>
            <div class="hide">
              <textarea
                name=""
                id=""
                cols="28"
                rows="7"
                class="areadescription"
                placeholder="Add a description"
              ></textarea>
            </div>
            <div class="flex">
              <img v-if="shownote"
                src="./assets/forward.png"
                class="backward"
                alt="Backward Icone"
                @click="addnote"
              />
              <div >
                <img src="./assets/approval.png" class="approuved" alt="Forward Icone"/>
                <img src="./assets/forward.png" class="confirm" alt="Forward Icone"/>
              </div>
            </div>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template> -->

