<template>
  <a-form class="task-add" :form="form" @submit="handleSubmit">
    <a-form-item>
      <a-input
        placeholder="请填写任务名称"
        v-decorator="[
          'name',
          {
            initialValue: this.editTask.name,
            rules: [
              { align: 'left', required: true, message: '请输入任务名称' },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item>
      <a-input
        type="textarea"
        style="height: 400px"
        placeholder="请填写JS脚本"
        v-decorator="[
          'code',
          {
            initialValue: this.editTask.code,
            rules: [{ align: 'left', required: true, message: '请输入脚本' }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit"> 保存任务 </a-button>
      <a-button type="default" style="margin-left:20px" @click="$router.push('/')">取消</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "form" }),
      editTask: {},
    };
  },
  created() {
    this.editTask = this.$route.params || { name: "", code: "" };
  },
  methods: {
    ...mapMutations("task", ["ADD_TASK", "UPDATE_TASK"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.editTask.id) {
            this.UPDATE_TASK({
              id: this.editTask.id,
              ...values,
            });
            this.$message.success("更新成功");
          } else {
            this.ADD_TASK(values);
            this.$message.success("保存成功");
          }
          this.$router.push("/");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.task-add {
  padding: 20px 20px 20px 20px;
  width: 600px;
  height: 480px;
}
</style>
