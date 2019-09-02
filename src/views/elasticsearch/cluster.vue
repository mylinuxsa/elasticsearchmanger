<template>
  <div>
    <div class="bread">
      <el-breadcrumb separator="/" class="content-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="createMenu">
        <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>

        <el-dialog title="集群名称" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="集群名:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.clusterName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="负责团队:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.team" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="负责人:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.owner" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.comment" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="postCluster('form')">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="clusterName" label="集群名" width="180"></el-table-column>
        <el-table-column prop="team" label="团队"></el-table-column>
        <el-table-column prop="owner" label="负责人"></el-table-column>
        <el-table-column prop="comment" label="备注"></el-table-column>
        <el-table-column prop="update_time" label="状态更新时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>

import axios from  'axios'

export default {
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        clusterName: "",
        team: "",
        owner: "",
        comment: ""
      },
      formLabelWidth: "100px"
    };
  },
  created() {
    //this.tableData = this.getnodes("http://localhost:9000/clusterInfo");
  },

  


  methods: {
     postCluster(form){
         axios.post("http://localhost:9000/clusterInfo/", form).then(
             res => {
                 console.log(res)
             }
         ).catch(err =>{
             console.log(err)
         })
     } ,


    getnodes(URL) {
      this.$post(URL).then(res => {
        this.tableData = res;
      });
    }
  }
};
</script>


<style scoped>
.bread {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
}
.content-breadcrumb {
  box-sizing: border-box;
  padding: 20px 20px 20px 10px;
}
.createMenu {
  margin: 10px;
}

.el-input__inner {
  margin-right: 40px;
}
</style>