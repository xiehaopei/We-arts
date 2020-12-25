<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Home</el-breadcrumb-item>
      <el-breadcrumb-item>Article Admin</el-breadcrumb-item>
      <el-breadcrumb-item>Article List</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-table :data="state.articleList" style="width: 100%">
        <el-table-column type="index" width="50" align="center"></el-table-column>
        <el-table-column prop="title" label="文章名" width="200" align="center"></el-table-column>
        <el-table-column prop="like" label="点赞数" width="70" align="center"></el-table-column>
        <el-table-column prop="read" label="阅读量" width="70" align="center"></el-table-column>
        <el-table-column prop="tags" label="标签" min-width="200" align="center">
          <template v-slot="scope">
            <el-tag
              v-for="tag in scope.row.tags"
              :key="tag._id"
              :style="{'background-color':tag.bgColor,'color':tag.color}"
            >{{tag.tagName}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="发布状态" width="100" align="center">
          <template v-slot="scope">
            <el-tag v-if="scope.row.isPublic" type="primary">已发布</el-tag>
            <el-tag v-else type="warning">未发布</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="时间" width="200" align="center">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template v-slot="options">
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

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="state.queryInfo.pageNum"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="state.queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="state.total"
      ></el-pagination>
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
      articleList: [],
      queryInfo: {
        query: '',
        pageNum: 1,
        pageSize: 5
      },
      total:0
    });
    onMounted(() => getArticleList());
    const getArticleList = async () => {
      const { data: res } = await Article.getArticleList(state.queryInfo);
      res.data.forEach((element) => {
        element.time = getTime(element.time);
      });
      state.total = res.total;
      state.articleList = res.data;
      console.log(res);
    };
    const handleSizeChange = (size)=>{
      state.queryInfo.pageSize = size
      getArticleList();
    };
    const handleCurrentChange = (page)=>{
      state.queryInfo.pageNum = page
      getArticleList();
    };
    return { state, getArticleList, handleSizeChange, handleCurrentChange };
  }
};
</script>

<style lang="scss" scoped>
.el-button {
  margin: 5px auto;
}

.el-tag {
  margin: 5px auto;
}

.el-pagination{
  margin-top: 15px;
}

.el-tag ~ .el-tag {
  margin-left: 15px;
}

.el-button ~ .el-button {
  margin-left: 10px;
}
</style>