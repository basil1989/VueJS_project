<template>
  <div id="app">
    <b-navbar v-if="authenticated" class="menu-bc yes" toggleable="md" position: sticky >
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#"><img style="width:150px" src="https://lh3.googleusercontent.com/3-6-C5O4OwKfmJqFrAT8XArOEVv1R4M6URGM0L7bZx4FzvGZFSl-fCmedrN5CUkz4b8XiDm2DA=w325-h53-no" alt=""></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
  <b-navbar-nav class="ml-auto">
    <b-navbar-nav class="tes" right >
      <a href="https://travling.id/" @click="activate(1)" :class="{ active : active_el == 1 }">Home</a>
    </b-navbar-nav>
    <b-nav-item-dropdown style="margin-top:5px;margin-left:5px;font-color:red" class="test_lang" text="Language" right>
      <b-dropdown-item href="https://travling.id/EN">English</b-dropdown-item>
      <b-dropdown-item href="https://travling.id/">Indonesia</b-dropdown-item>
    </b-nav-item-dropdown>
</b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view @authenticated="setAuthenticated" />
  </div>

</template>

<script>

import  './assets/hello.css'
export default {
  name: 'app',
  data () {
  return {
    authenticated: false,
    active_el:1
  }
},
mounted(){

 if(this.$router.history.current.fullPath=="/404"){
 this.authenticated = false
  } else {
    this.authenticated = true
  }
},
methods: {
  setAuthenticated(status) {
  this.authenticated = status;
  },
    activate : function(el){
      this.active_el = el;
    }
  }

}
</script>

<style>
.navbar-light .navbar-nav .nav-link {
    color: black;
}
</style>

<style scoped>

  .yes{
    -webkit-box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.49);
    -moz-box-shadow:    0px 3px 5px rgba(100, 100, 100, 0.49);
     box-shadow:         0px 3px 5px rgba(100, 100, 100, 0.49);
  }
.menu-bc{
  background-color:#fff;
  }

.tes > a {
  font-family:"Trebuchet MS", Helvetica, sans-serif;
  text-decoration:none;
  margin:15px;
  color:#000 ;
  font-weight:600;
  font-size:15px;

}

.tes > a.active {
  font-weight:600;
  color:#0100F0  ;
}

</style>
