<template>
  <div class="task-item" @contextmenu="show">{{ value.name }}</div>
</template>
<script>
import TaskComtextMenu from './TaskComtextMenu'
export default {
  props: ['value'],
  methods: {
    show(e) {
      window.event.returnValue = false
      this.$contextMenu({
        component: TaskComtextMenu,
        event: e,
        props: {
          task: this.value
        }
      })
    }
  }
}
</script>
<style lang="less">
.task-item{
  line-height: 2;
  font-size: 16px;
  padding: 0 10px;
  font-weight: bold;
  background: dodgerblue;
  color: white;
  border-radius: 5px;
}
</style>
