<template>
  <div class="task-context-menu" @click="$emit('onClose')">
    <span @click="handleRun">运行</span>
    <span @click="handleUpdate">详情</span>
    <span @click="handleDelete">删除</span>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    task: {
      // 消息
      type: Object,
      default: null,
    },
  },
  methods: {
    handleUpdate() {
      window.$vm.$router.push({
        name: "add-page",
        params: this.task,
      });
    },
    handleDelete() {
      window.$vm.$store.commit("task/DELETE_TASK", this.task.id);
    },
    handleRun() {
      chrome.tabs.executeScript(window.$vm.$store.state.task.curPage.id, {
        code: this.task.code,
      });
      /*
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.executeScript(window.$vm.$store.state.task.curPage.id, {
          code: this.task.code,
        });
      });*/
    },
  },
};
</script>
<style lang="less">
.task-context-menu {
  text-align: center;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  width: 130px;
  display: flex;
  justify-content: space-between;
  span {
    line-height: 30px;
    font-size: 14px;
    color: #202328;
    display: inline-block;
    cursor: pointer;
    padding: 0 3px;
    &:hover {
      color: dodgerblue;
    }
  }
}
</style>
