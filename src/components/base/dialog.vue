<template>
    <div class="dialogMenu">
        <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>

        <el-dialog :dialogTitle="集群名称" :visible.sync="dialogFormVisible">
          <el-form :model="form" v-for="item in items">
              <el-form-item label="{{ item.comment }}" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="{{ item.key }}" auto-complete="off"></el-input>
            </el-form-item>

            <!--<el-form-item label="集群名:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.clusterName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="负责团队:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.team" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="负责人:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.owner" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="kibana:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.mangerurl" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注:" :label-width="formLabelWidth" style="margin-right: 40px; ">
              <el-input v-model="form.comment" auto-complete="off"></el-input>
            </el-form-item>-->
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="postCluster(form)">确 定</el-button>
          </div>
        </el-dialog>
      </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>

</style>