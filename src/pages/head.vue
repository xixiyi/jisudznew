<template>
<div>
    <el-header style="background-color:#252a2f;padding:0 20px 0 0;height:53px;line-height:53px">
        <img
          v-if="isCollapse"
          style="width:64px;height:53px;vertical-align: middle;"
          src="image/logo.png"
          alt
          srcset
        >
        <img
          v-if="!isCollapse"
          style="width:200px;height:53px;vertical-align: middle;"
          src="image/biglogo.png"
          alt
          srcset
        >

        <div v-if="isCollapse" :style="[headstyle]">
          <i @click="changeCollapse" class="el-icon-s-unfold"></i>
        </div>
        <div v-if="!isCollapse" :style="[headstyle]">
          <i @click="changeCollapse" class="el-icon-s-fold"></i>
        </div>
        <el-menu
          background-color="#252a2f"
          text-color="#ffffff"
          active-text-color="#ffd04b"
          class="el-menu-demo"
          mode="horizontal"
          style="float:right;height:53px;line-height:53px"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <i class="el-icon-message-solid"></i>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">用户姓名</template>
            <el-menu-item index="2-1">基本资料</el-menu-item>
            <el-menu-item index="2-2">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
     </div> 
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      headstyle: {
        display: "inline-block",
        height: "53px",
        "line-height": "53px",
        color: "#909399",
        "font-size": "18px",
        "vertical-align": "middle"
      }
      
    };
  },

  mounted() {

  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath, e) {
      console.log(key, keyPath, e);

      this.addTab(e);
    },
    changeCollapse(key, keyPath) {
      console.log(key, keyPath);
      this.isCollapse = !this.isCollapse;
    },

  }
};
</script>

<style lang="scss" >
body {
  padding: 0;
  margin: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-submenu__title:hover {
  border-bottom: 3px solid skyblue;
}
.el-menu-item:hover {
  border-bottom: 3px solid skyblue;
}
.inner-container::-webkit-scrollbar {
  display: none;
}
.inner-container {
  overflow-x: hidden;
  overflow-y: scroll;
}
.el-header .el-menu--horizontal > .el-menu-item {
  height: 53px;
  line-height: 53px;
}
.el-header .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 53px;
  line-height: 53px;
}
.el-main {
  padding: 10px;
}
// [class^="menuManager_"] {
//   display: none;
// }
</style>
