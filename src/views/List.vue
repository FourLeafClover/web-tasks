<template>
  <div class="task-list">
    <div class="add-task" @click="handleAdd">新增任务</div>
    <TaskItem v-for="(item, index) in curTasks" :key="index" :value="item">
    </TaskItem>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TaskItem from "../components/TaskItem";
export default {
  components: {
    TaskItem,
  },
  computed: {
    ...mapState("task", ["tasks", "curPage"]),
    curTasks() {
      return this.tasks.filter((x) => x.domain === this.curPage.domain);
    },
  },
  methods: {
    handleAdd() {
      this.$router.push("/add");
    },
  },
};
</script>
<style lang="less" scoped>
.task-list {
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  width: 300px;
  .add-task {
    text-align: center;
    background: white;
    color: dodgerblue;
    line-height: 2;
    font-size: 16px;
    font-weight: bold;
  }
  /deep/.task-item {
    margin-top: 10px;
  }
}
</style>
