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
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <template #default>
              <i class="el-icon-plus"></i>
            </template>
            <template #file="{file}">
              <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
          <el-dialog v-model="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-button type="success" @click="publicArticle">发布文章</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import Tag from '../../api/tag.js';
import marked from 'marked';
import { ElMessage } from 'element-plus';
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
        tags: [],
        isPublic: true
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
    const publicArticle = () => {
      if(!state.article.title){
        return ElMessage({
          type:'info',
          message:'请输入文章名称！'
        })
      }
      state.article.contentHtml = marked(state.article.content);
      console.log(state.article);
    };
    return { state, form, md, publicArticle };
  }
};
</script>

<style lang="scss" scoped>
.el-form-item {
  text-align: left;
}
</style>