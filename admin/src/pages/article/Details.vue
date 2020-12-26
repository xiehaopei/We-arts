<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Home</el-breadcrumb-item>
      <el-breadcrumb-item>Article Admin</el-breadcrumb-item>
      <el-breadcrumb-item>Article Details</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-form ref="form" label-width="100px">
        <el-form-item label="文章名称">
          <el-input v-model="state.article.title"></el-input>
        </el-form-item>
        <el-form-item label="文章描述">
          <el-input type="textarea" v-model="state.article.describe"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-checkbox-group v-model="state.article.tags" size="mini">
            <el-checkbox
              v-for="tag in state.tagList"
              :key="tag._id"
              :label="tag._id"
              border
            >{{tag.tagName}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="内容">
          <v-md-editor v-model="state.article.content" height="400px" ref="md"></v-md-editor>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="state.article.time"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="封面图">
          <el-upload
            ref="upload"
            :action="state.uploadUrl"
            :limit="1"
            :on-remove="handleRemove"
            :on-exceed="handleExceed"
            :on-success="handleSuccess"
            :auto-upload="false"
          >
            <el-button size="small" type="primary">选取文件</el-button>
          </el-upload>
        </el-form-item>
        <el-button type="success" @click="publicArticle">发布文章</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import Tag from '../../api/tag.js';
/* import Article from '../../api/article.js'; */
import marked from 'marked';
import { ElMessage } from 'element-plus';
import base from '../../api/base.js';
export default {
  setup() {
    const state = reactive({
      tagList: [],
      id: '',
      article: {
        title: '',
        content: '',
        describe: '',
        contentHtml: '',
        time: null,
        like: 0,
        read: 0,
        image: {},
        tags: [],
        isPublic: true
      },
      uploadUrl: base.baseUrl + base.fileUpload
    });
    const form = ref(null);
    const md = ref();
    const upload = ref();
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
    const publicArticle = async () => {
      if (!state.article.title) {
        return ElMessage({
          type: 'info',
          message: '请输入文章名称！'
        });
      }
      state.article.contentHtml = marked(state.article.content);
      try {
        await upload.value.submit();
        console.log(state.article);
      } catch (error) {
        ElMessage({
          type: 'error',
          message: '图片上传失败x_x'
        });
        throw new Error(error);
      }
      // 后台无法获取到tags
      /* createArticle(state.article); */
    };
    /* const createArticle = async (parmas) => {
      try {
        const { data: res } = await Article.createArticle(parmas);
        if (res.status === 200) {
          ElMessage({
            type: 'success',
            message: '文章发布成功!'
          });
        }
      } catch (error) {
        ElMessage({
          type: error,
          message: '发生了错误x_x'
        });
        throw new Error(error);
      }
    }; */
    const handleRemove = (file, fileList) => {
      console.log('remove', file, fileList);
    };
    const handleExceed = (files, fileList) => {
      console.log(files, fileList);
      ElMessage({
        type: 'warning',
        message: '最多只能上传一个文件哦~'
      });
    };
    const handleSuccess = (response) => {
      console.log(response);
      if (response.data) {
        state.article.image.path = response.data.path;
        state.article.image.filename = response.data.filename;
      }
    };
    return {
      state,
      form,
      md,
      upload,
      publicArticle,
      handleRemove,
      handleExceed,
      handleSuccess
    };
  }
};
</script>

<style lang="scss" scoped>
.el-form-item {
  text-align: left;
}
</style>