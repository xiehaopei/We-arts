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
            <el-button type="primary" size="mini" @click="updateUser(options.row)">
              <i class="el-icon-edit"></i>
              <span>Edit</span>
            </el-button>
            <el-button type="success" size="mini" @click="addUser(options.row)">
              <i class="el-icon-plus"></i>
              <span>Add</span>
            </el-button>
            <el-button type="danger" size="mini" @click="deleteUser(options.row._id)">
              <i class="el-icon-delete"></i>
              <span>Delete</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="编辑用户信息" v-model="state.editDialog" width="50%" center>
      <el-input v-model="state.editInfo.username" placeholder="请输入用户名"></el-input>
      <el-input v-model="state.editInfo.password" placeholder="请输入密码"></el-input>
      <el-select v-model="state.editInfo.authority" placeholder="请选择用户权限">
        <el-option
          v-for="item in state.authority"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="state.editDialog = false">取 消</el-button>
          <el-button type="primary" @click="editOk">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog title="添加用户信息" v-model="state.addDialog" width="50%" center>
      <el-input v-model="state.user.username" placeholder="请输入用户名"></el-input>
      <el-input v-model="state.user.password" placeholder="请输入密码"></el-input>
      <el-select v-model="state.user.authority" placeholder="请选择用户权限">
        <el-option
          v-for="item in state.authority"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="state.addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addOk">确 定</el-button>
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
      addDialog: false,
      user: {},
      editInfo: {},
      authority: [
        {
          value: true,
          label: '管理员'
        },
        {
          value: false,
          label: '游客'
        }
      ]
    });
    /**
     * @description: 挂载时获取用户列表
     * @param {*}
     * @return {*}
     */
    onMounted(() => getUsers());
    /**
     * @description: 获取用户列表
     * @param {*} async
     * @return {*}
     */
    const getUsers = async () => {
      const { data: res } = await User.getUserList();
      state.userData = res;
    };
    /**
     * @description: 打开修改用户信息对话框
     * @param {*} userInfo 用户信息对象
     * @return {*}
     */
    const updateUser = (userInfo) => {
      state.editDialog = true;
      state.user = userInfo;
      state.editInfo = JSON.parse(JSON.stringify(userInfo));
    };
    /**
     * @description: 修改用户信息
     * @param {*}
     * @return {*}
     */
    const editOk = async () => {
      console.log(state.editInfo, state.user);
      if (valideInput(state.editInfo)) return;
      if (
        state.editInfo.username === state.user.username &&
        state.editInfo.password === state.user.password &&
        state.editInfo.authority === state.user.authority
      ) {
        state.editDialog = false;
        return ElMessage({
          type: 'info',
          message: '已取消更改'
        });
      }
      try {
        const id = state.editInfo._id;
        const params = {
          username: state.editInfo.username,
          password: state.editInfo.password,
          authority: state.editInfo.authority
        };
        const res = await User.updateUser(id, params);
        console.log(res);
        ElMessage({
          type: 'success',
          message: '用户信息修改成功！'
        });
        state.editDialog = false;
        getUsers();
      } catch (error) {
        ElMessage({
          type: 'error',
          message: '发生错误了X_X'
        });
        throw new Error(error);
      }
    };
    /**
     * @description: 打开添加新用户对话框
     * @param {*}
     * @return {*}
     */
    const addUser = () => {
      state.addDialog = true;
      state.user = {};
    };
    /**
     * @description: 添加新用户
     * @param {*} async
     * @return {*}
     */
    const addOk = async () => {
      if (valideInput(state.user)) return;
      try {
        const { data: res } = await User.addUser(state.user);
        console.log(res);
        ElMessage({
          type: 'success',
          message: `成功添加用户${res.username}!`
        });
        state.addDialog = false;
        getUsers();
      } catch (error) {
        throw new Error(error);
      }
    };
    /**
     * @description: 删除用户
     * @param {*} id 删除的用户id
     * @return {*}
     */
    const deleteUser = async (id) => {
      const info = await ElMessageBox.confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }
      ).catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消删除'
        });
      });
      if (info === 'confirm') delOk(id);
    };
    /**
     * @description: 执行删除操作
     * @param {*} async id 删除用户的id
     * @return {*}
     */
    const delOk = async (id) => {
      try {
        const { data: res } = await User.deleteUser(id);
        console.log(res);
        ElMessage({
          type: 'success',
          message: '删除用户成功！'
        });
        getUsers();
      } catch (error) {
        throw new Error(error);
      }
    };
    /**
     * @description: 验证输入框是否为空
     * @param {*} user 用户信息对象
     * @return {*}
     */
    const valideInput = (user) => {
      if (!user.username) {
        return ElMessage({
          type: 'info',
          message: '用户名不可为空，请输入用户名！'
        });
      } else if (!user.password) {
        return ElMessage({
          type: 'info',
          message: '密码不可为空，请输入密码！'
        });
      } else if (user.password.length < 3 || user.password.length > 16) {
        return ElMessage({
          type: 'info',
          message: '密码长度需保持在3-16个字符之间'
        });
      } else if (user.authority === undefined) {
        return ElMessage({
          type: 'info',
          message: '请选择用户权限！'
        });
      }
    };
    return { state, updateUser, addUser, deleteUser, editOk, addOk };
  }
};
</script>