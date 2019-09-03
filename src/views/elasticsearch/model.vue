<template>
  <div>
    



      
    
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="clusterName" label="集群名" width="180"></el-table-column>
        <el-table-column prop="team" label="团队"></el-table-column>
        <el-table-column prop="owner" label="负责人"></el-table-column>
        <el-table-column prop="mangerurl" label="查询地址"></el-table-column>
        <el-table-column prop="comment" label="备注"></el-table-column>
        <el-table-column prop="update_time" label="状态更新时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
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
        mangerurl:"",
        comment: ""
      },
      formLabelWidth: "100px"
    };
  },
  created() {
    this.getnodes("http://localhost:9000/clusterInfo");
  },

  methods: {
    postCluster(form) {
      console.log(form);
      this.$post("http://localhost:9000/clusterInfo/", form)
        .then(res => {
          this.$message.success("提交成功");
        })
        .catch(err => {
          this.$message.success("提交失败");
        });
    },

    getnodes(URL) {
      this.$get(URL).then(res => {
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