<template>
  <el-container>
    <el-aside width="200px">
      <a class="blog-name" href="#">We-arts</a>
      <el-menu
      :default-active="currentPath"
      active-text-color="rgb(34, 195, 93)"
      router>
      <el-menu-item index="/monitor">
        <i class="el-icon-menu"></i>
        <template #title>Dash Board</template>
      </el-menu-item>
      <el-submenu index>
        <template #title>
          <i class="el-icon-s-promotion"></i>
          <span>Article Admin</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/article">
            <span>Article List</span>
          </el-menu-item>
          <el-menu-item index="/details">
            <span>Article Details</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/tag">
        <i class="el-icon-collection-tag"></i>
        <template #title>Tag admin</template>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-user"></i>
        <template #title>User Admin</template>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import router from '../router.js'
export default {
  setup() {
    let currentPath = router.currentRoute.value.path;
    return { currentPath }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
	height: 100vh;
}

.el-aside {
	height: 100vh;
	line-height: 100px;
	text-align: center;

	.blog-name {
		height: 100px;
		line-height: 100px;
		text-decoration: none;
		font-weight: 700;
		font-size: 24px;
		color: rgba(34, 195, 93,.7);
	}
}

.el-main {
	text-align: center;
	color: #333;
}
</style>