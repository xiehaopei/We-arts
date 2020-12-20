<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Home</el-breadcrumb-item>
      <el-breadcrumb-item>Article Admin</el-breadcrumb-item>
      <el-breadcrumb-item>Article Details</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="文章名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="文章描述">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-checkbox-group v-model="state.tagsCheckGroup" size="mini">
            <el-checkbox
              v-for="tag in state.tags"
              :key="tag._id"
              :label="tag.tagName"
              border
            >{{tag.tagName}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="内容"></el-form-item>
        <el-form-item label="时间"></el-form-item>
        <el-form-item label="封面图"></el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import Tag from '../../api/tag.js';
export default {
  setup() {
    const state = reactive({
      tags: [],
      tagsCheckGroup: []
    });
    const form = ref(null);
    const getTags = async () => {
      try {
        const { data: res } = await Tag.getTags();
        state.tags = res.data;
      } catch (error) {
        throw new Error(error);
      }
    };
    onMounted(() => {
      getTags();
    });
    return { state, form };
  }
};
</script>