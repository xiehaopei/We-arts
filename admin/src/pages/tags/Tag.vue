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
          class="tag"
          v-for="tag in state.tags"
          :key="tag._id"
          @click="showArticleList(tag._id)"
        >{{tag.tagName}}</el-tag>
        <el-button type="success" size="mini" @click="state.addTagDialogVisible = true">
          <i class="el-icon-plus"></i>
          <span>Add Tag</span>
        </el-button>
        <el-button type="danger" size="mini" @click="state.delTagDialogVisible = true">
          <i class="el-icon-delete"></i>
          <span>Delete Tag</span>
        </el-button>

        <div v-if="state.isShow" class="article-list">
          <el-table :data="state.articleList">
            <el-table-column type="index" width="50" align="center"></el-table-column>
            <el-table-column prop="title" label="文章名" min-width="200" align="center"></el-table-column>
            <el-table-column label="标签" min-width="200" align="center">
              <template v-slot="scope">
                <div v-if="scope.row.tags">
                  <el-tag class="tag" v-for="tag in scope.row.tags" :key="tag._id">{{tag.tagName}}</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="read" label="阅读量" width="75" align="center"></el-table-column>
            <el-table-column label="发布状态" width="120" align="center">
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
          </el-table>
        </div>
      </div>
    </el-card>

    <el-dialog title="添加新标签" v-model="state.addTagDialogVisible" width="50%" center>
      <el-form label-width="100px">
        <el-form-item label="标签名">
          <el-input placeholder="请输入标签名" v-model="state.tag.tagName"></el-input>
        </el-form-item>
        <el-form-item label="标签预览">
          <el-tag class="tag">{{state.tag.tagName}}</el-tag>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelOption">取 消</el-button>
          <el-button type="primary" @click="addOption">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog title="删除标签" v-model="state.delTagDialogVisible" width="50%" center>
      <span>请输入要删除的标签名称，并确保该标签下不包含任何文章</span>
      <el-input v-model="delInput" placeholder="请输入标签名" clearable></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelOption">取 消</el-button>
          <el-button type="primary" @click="delTag">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import Tag from '../../api/tag.js';
import Article from '../../api/article.js';
import { ElMessage } from 'element-plus';
import getTime from '../../utils/time.js';
export default {
  setup() {
    const state = reactive({
      tags: [],
      tag: {
        tagName: ''
      },
      addTagDialogVisible: false,
      delTagDialogVisible: false,
      isShow: false,
      articleList: {}
    });
    const delInput = ref('');
    const getTags = async () => {
      const { data: res } = await Tag.getTags();
      state.tags = res.data;
      console.log(state.tags);
    };
    onMounted(() => getTags());
    const cancelOption = () => {
      ElMessage({
        type: 'info',
        message: '已取消操作'
      });
      delInput.value = '';
      state.addTagDialogVisible = false;
      state.delTagDialogVisible = false;
    };
    const addOption = async () => {
      if (!state.tag.tagName) {
        return ElMessage({
          type: 'info',
          message: '请输入标签名称!'
        });
      }
      try {
        const { data: res } = await Tag.addTag({ tagName: state.tag.tagName });
        if (res.meta.status === 200) {
          ElMessage({
            type: 'success',
            message: '添加标签成功！'
          });
          state.addTagDialogVisible = false;
          await getTags();
        }
      } catch (error) {
        ElMessage({
          type: 'error',
          message: '添加失败x_x'
        });
        throw new Error(error);
      }
    };
    const delTag = async () => {
      if (!delInput.value) {
        return ElMessage({
          type: 'info',
          message: '请输入标签名'
        });
      }
      const found = state.tags.find((item) => {
        return item.tagName == delInput.value;
      });
      if (found) {
        try {
          const { data: res } = await Article.getArticleListByTag(found._id);
          if (res.data.length) {
            return ElMessage({
              type: 'warning',
              message: `该标签下含有${res.data.length}篇文章，无法直接删除该标签！`
            });
          } else {
            try {
              const { data: res } = await Tag.deleteTag({tagName:delInput.value});
              if (res.meta.status === 200) {
                ElMessage({
                  type: 'success',
                  message: '标签删除成功!'
                });
                await getTags();
              }
            } catch (error) {
              ElMessage({
                type: 'error',
                message: '删除失败X_X'
              });
              throw new Error(error);
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      } else {
        return ElMessage({
          type: 'warning',
          message: '标签名不存在x_x'
        });
      }
      delInput.value = '';
      state.delTagDialogVisible = false;
    };
    // 此处需要进行节流优化
    const showArticleList = async (id) => {
      try {
        const { data: res } = await Article.getArticleListByTag(id);
        if (res.data.length) {
          res.data.forEach((element) => {
            element.time = getTime(element.time);
          });
          state.articleList = res.data;
          state.isShow = true;
          console.log(state.articleList);
          ElMessage({
            type: 'success',
            message: '获取文章列表成功！',
            duration: 700
          });
        } else {
          state.isShow = false;
          state.articleList = {};
          ElMessage({
            type: 'info',
            message: '该标签下没有文章',
            duration: 700
          });
        }
      } catch (error) {
        ElMessage({
          type: 'error',
          message: '发生错误x_x'
        });
        throw new Error(error);
      }
    };
    return {
      state,
      delInput,
      cancelOption,
      addOption,
      showArticleList,
      delTag
    };
  }
};
</script>

<style lang="scss" scoped>
.card-box {
  text-align: left;

  .el-tag {
    margin: 5px auto;
    cursor: pointer;
  }

  .el-button {
    margin: 20px 0 0 20px;
  }

  .article-list {
    margin-top: 30px;
    text-align: center;
  }
}

.el-tag ~ .el-tag {
  margin-left: 15px;
}

.tag {
  display: inline-block;
  margin: 4px 8px 10px;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 2px 2px 5px #d4d4d4;
  cursor: pointer;
  vertical-align: middle;
  font-size: 13px;
  color: #000;
  transition: all 0.5s;

  &:hover {
    background-color: #3eaf7c;
    color: #fff;
  }
}

.el-input {
  margin: 10px 5px;
}
</style>