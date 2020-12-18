<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Home</el-breadcrumb-item>
      <el-breadcrumb-item>Article Admin</el-breadcrumb-item>
      <el-breadcrumb-item>Article List</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-table :data="state.articleList" style="width: 100%" height="600" border>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="title" label="文章名" width="200"></el-table-column>
        <el-table-column prop="like" label="点赞数" width="75"></el-table-column>
        <el-table-column prop="read" label="阅读量" width="75"></el-table-column>
        <el-table-column prop="tags" label="标签">
          <template v-slot="scope">
            <el-tag v-for="tag in scope.row.tags" :key="tag">{{tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="时间" width="200">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="options">
            <el-button type="success" size="mini" @click="options.row">
              <i class="el-icon-view"></i>
              <span>Check</span>
            </el-button>
            <el-button type="primary" size="mini" @click="options.row">
              <i class="el-icon-edit"></i>
              <span>Edit</span>
            </el-button>
            <el-button type="danger" size="mini" @click="options.row">
              <i class="el-icon-delete"></i>
              <span>Delete</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import Article from '../../api/article.js';
import getTime from '../../utils/time.js';
export default {
  setup() {
    const state = reactive({
      articleList: []
    });
    onMounted(() => getArticleList());
    const getArticleList = async () => {
      const { data: res } = await Article.getArticleList();
      res.forEach(element => {
        element.time = getTime(element.time);
      });
      state.articleList = res;
      console.log(res);
    };
    return { state, getArticleList };
  }
};
</script>