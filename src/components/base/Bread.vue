<template>
    <div class="bread">
      <el-breadcrumb separator="/" class="content-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.bread {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
}
</style>