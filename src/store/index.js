import Vue from 'vue'
import Vuex from 'vuex'
import task from './task'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => {
    return {
      task: {
        tasks: state.task.tasks
      }
    }
  }
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    task
  }
})
