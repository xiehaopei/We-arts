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
          <el-input v-model="state.article.title"></el-input>
        </el-form-item>
        <el-form-item label="文章描述">
          <el-input type="textarea" v-model="state.article.describes"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-checkbox-group v-model="state.article.tags" size="mini" style="text-align:left">
            <el-checkbox
              v-for="tag in state.tagList"
              :key="tag._id"
              :label="tag.tagName"
              border
            >{{tag.tagName}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="内容">
          <v-md-editor v-model="text" height="400px"></v-md-editor>
        </el-form-item>
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
      tagList: [],
      article: {
        id: '',
        title: '',
        content: '',
        describe: '',
        contentHtml: '',
        time: null,
        like: 0,
        read: 0,
        image: {},
        tags: []
      }
    });
    const form = ref(null);
    const md = ref();
    const getTags = async () => {
      try {
        const { data: res } = await Tag.getTags();
        state.tagList = res.data;
      } catch (error) {
        throw new Error(error);
      }
    };
    onMounted(() => {
      getTags();
    });
    return { state, form, md };
  }
};
</script>