<template>
  <div class="NavLeft">
    <el-menu router :collapse="isCollapse">
      <el-menu-item index="/">
          <i class="el-icon-location"></i>
          <span slot="title">系统总览</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">elasticsearch</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">hangout</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">kafka</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.NavLeft {
  width: 200px;
  height: 100%;
}
.el-menu {
  height: 100%;
  border-right: 0px;
  background-color: rgb(48, 65, 86);
}
el-menu-item-group__title {
  padding: 0px;
}

span {
  color: rgb(191, 203, 217);
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {}
};
</script>