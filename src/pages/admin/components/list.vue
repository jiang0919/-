<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="id" label="用户编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户名" sortable width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="所属角色" sortable width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status == 1" type="primary"
            >启用</el-button
          >
          <el-button v-else type="info">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)"
            >编辑</el-button
          >
          <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <!-- 
    total：设置总数 
    page-size：每页数量 
    有多少页，不用自己计算 

    current-change：当前页码发生了改变，就会触发，参数就是当前的页码
    -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="size"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { successAlert, warningAlert } from "../../../utils/alert";
import { reqAdmindel } from "../../../utils/request";
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      list: "admin/list",
      size: "admin/size",
      total: "admin/total",
    }),
  },
  methods: {
    ...mapActions({
      reqListAction: "admin/reqListAction",
      reqTotalAction: "admin/reqTotalAction",
      changePageAction: "admin/changePageAction",
    }),
    //编辑
    edit(uid) {
      this.$emit("edit", uid);
    },
    del(uid) {
      this.$confirm("你确定要删除吗？", "删除提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log(uid);
          //点了确定按钮
          reqAdmindel(uid).then((res) => {
            if (res.data.code == 200) {
              successAlert(res.data.msg);
              this.reqListAction();
              //重新获取总数
              this.reqTotalAction();
            } else {
              warningAlert(res.data.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //修改当前页码
    changePage(e) {
      this.changePageAction(e);
    },
  },
  mounted() {
    this.reqListAction();
    this.reqTotalAction();
  },
};
</script>
<style scoped>
</style>