<template>
  <el-row class="tac">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/page1">
        <i class="el-icon-menu"></i>
        <span slot="title">页面1</span>
      </el-menu-item>
      <el-menu-item index="/page2">
        <i class="el-icon-document"></i>
        <span slot="title">页面2</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.tac{
  height: 100%;
  background-color: rgb(84, 92, 100);
  overflow: auto;
  .el-menu-vertical-demo{
    height: 100%;
  }
}
</style>
