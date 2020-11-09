<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  mounted() {
    try {
      chrome.tabs.getSelected(null,  (tab) => {
        let domain = tab.url.split('/').length >=3? tab.url.split('/')[2]:''
        this.SET_CURPAGE({
          id: tab.id,
          domain: domain || tab.url,
        });
      });
    } catch {
        this.SET_CURPAGE({
          id: '0',
          domain: window.location.origin,
        });
    }
  },
  methods: {
    ...mapMutations("task", ["SET_CURPAGE"]),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  height: auto !important;
}
</style>
