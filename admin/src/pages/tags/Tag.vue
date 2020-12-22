<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Home</el-breadcrumb-item>
      <el-breadcrumb-item>Tag Admin</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-tag
        v-for="tag in state.tags"
        :key="tag._id"
        :style="{'background-color':tag.bgColor,'color':tag.color}"
      >{{tag.tagName}}</el-tag>
    </el-card>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import Tag from '../../api/tag.js';
export default {
  setup() {
    const state = reactive({
      tags: []
    });
    const getTags = async () => {
      const { data: res } = await Tag.getTags();
      state.tags = res.data;
      console.log(state.tags);
    };
    onMounted(() => getTags());
    return { state };
  }
};
</script>

<style lang="scss" scoped>
</style>