<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Home</el-breadcrumb-item>
      <el-breadcrumb-item>User Admin</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-table :data="state.userData" style="width: 100%" height="600" border>
        <el-table-column type="index" width="100"></el-table-column>
        <el-table-column prop="username" label="用户名" width="200"></el-table-column>
        <el-table-column prop="authority" label="操作权限" width="200">
          <template v-slot="scope">
            <el-tag v-if="scope.row.authority">管理员</el-tag>
            <el-tag type="success" v-else>游客</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="options">
            <el-button type="primary" size="mini" @click="updateUser(options)">
              <i class="el-icon-edit"></i>
              <span>Edit</span>
            </el-button>
            <el-button type="success" size="mini" @click="addUser(options)">
              <i class="el-icon-plus"></i>
              <span>Add</span>
            </el-button>
            <el-button type="danger" size="mini" @click="deleteUser(options)">
              <i class="el-icon-delete"></i>
              <span>Delete</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="编辑用户信息" v-model="state.editDialog" width="50%" :before-close="handleClose" center>
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="state.editDialog = false">取 消</el-button>
          <el-button type="primary" @click="state.editDialog = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog title="添加用户信息" v-model="state.addDialog" width="50%" :before-close="handleClose" center>
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="state.addDialog = false">取 消</el-button>
          <el-button type="primary" @click="state.addDialog = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import User from '../../api/user.js';
import { ElMessageBox, ElMessage } from 'element-plus';
export default {
  setup() {
    const state = reactive({
      userData: [],
      editDialog: false,
      addDialog: false
    });
    onMounted(async () => {
      const { data: res } = await User.getUserList();
      state.userData = res;
    });
    const updateUser = () => {
      state.editDialog = true;
    };
    const addUser = () => {
      state.addDialog = true;
    };
    const deleteUser = () => {
      ElMessageBox.confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          ElMessage({
            type: 'success',
            message: '删除用户成功！'
          });
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消删除'
          });
        });
    };
    return { state, updateUser, addUser, deleteUser };
  }
};
</script>