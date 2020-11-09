const state = {
  tasks: [],
  curPage: {},
}

const mutations = {
  ADD_TASK (state, task) {
    state.tasks.push({
      ...task,
      domain: state.curPage.domain,
      id: new Date().getTime()
    })
  },
  UPDATE_TASK (state, task) {
    let curTask = state.tasks.find(x => x.id === task.id)
    curTask.name = task.name
    curTask.code = task.code
  },
  SET_CURPAGE (state, page) {
    state.curPage = page
  },
  DELETE_TASK (state, id) {
    let index = state.tasks.findIndex(x => x.id === id)
    state.tasks.splice(index,1)
  }
}

export default { namespaced: true, state, mutations }
