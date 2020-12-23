<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Home</el-breadcrumb-item>
      <el-breadcrumb-item>Tag Admin</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div class="card-box">
        <span>选择标签：</span>
        <el-tag
          v-for="tag in state.tags"
          :key="tag._id"
          :style="{'background-color':tag.bgColor,'color':tag.color}"
          @click="showArticleList(tag._id)"
        >{{tag.tagName}}</el-tag>
        <el-button type="success" size="mini" @click="showAddDialog">
          <i class="el-icon-plus"></i>
          <span>Add Tag</span>
        </el-button>

        <div v-if="state.isShow" class="article-list">
          <el-table :data="state.articleList">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="title" label="文章名" width="200"></el-table-column>
            <el-table-column prop="like" label="点赞数" width="75"></el-table-column>
            <el-table-column prop="read" label="阅读量" width="75"></el-table-column>
            <el-table-column label="时间" width="200">
              <template v-slot="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.time }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>

    <el-dialog title="添加新标签" v-model="state.addTagDialogVisible" width="50%" center>
      <el-form label-width="100px">
        <el-form-item label="标签名">
          <el-input placeholder="请输入标签名" v-model="state.tag.tagName"></el-input>
        </el-form-item>
        <el-form-item label="标签背景色">
          <el-color-picker v-model="state.tag.bgColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="标签字体颜色">
          <el-color-picker v-model="state.tag.color" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="标签预览">
          <el-tag
            :style="{'background-color':state.tag.bgColor,'color':state.tag.color}"
          >{{state.tag.tagName}}</el-tag>
        </el-form-item>
        {{state.tag}}
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelOption">取 消</el-button>
          <el-button type="primary" @click="addOption">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import Tag from '../../api/tag.js';
import Article from '../../api/article.js';
import { ElMessage } from 'element-plus';
import getTime from '../../utils/time.js';
export default {
  setup() {
    const state = reactive({
      tags: [],
      tag: {
        tagName: '',
        bgColor: '#000',
        color: '#fff'
      },
      addTagDialogVisible: false,
      isShow: false,
      articleList: {}
    });
    const getTags = async () => {
      const { data: res } = await Tag.getTags();
      state.tags = res.data;
      console.log(state.tags);
    };
    onMounted(() => getTags());
    const showAddDialog = () => {
      state.addTagDialogVisible = true;
    };
    const cancelOption = () => {
      ElMessage({
        type: 'info',
        message: '已取消操作'
      });
      state.addTagDialogVisible = false;
    };
    const addOption = () => {
      state.addTagDialogVisible = false;
    };
    const showArticleList = async (id) => {
      try {
        const { data: res } = await Article.getArticleListByTag(id);
        res.data.forEach(element => {
          element.time = getTime(element.time)
        });
        state.articleList = res.data;
        state.isShow = true;
        console.log(state.articleList);
      } catch (error) {
        throw new Error(error);
      }
    };
    return { state, showAddDialog, cancelOption, addOption, showArticleList };
  }
};
</script>

<style lang="scss" scoped>
.card-box {
  text-align: left;

  .el-tag {
    margin-left: 15px;
    cursor: pointer;
  }

  .el-button {
    margin-left: 20px;
  }

  .article-list{
    margin-top: 30px;
    text-align: center;
  }
}
</style>