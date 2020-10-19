<template>
  <div>
    <template>
      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="uid" label="用户编号" width="180">
        </el-table-column>
        <el-table-column prop="nickname" label="昵称" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="手机号"> </el-table-column>
        <el-table-column prop="pasword" label="状态">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status == 1" type="primary"
              >启用</el-button
            >
            <el-button v-else type="primary">禁用</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="primary" @click="edit(scope.row.uid)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { successAlert, warningAlert } from "../../../utils/alert";
export default {
  props: [],
  components: {},
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters({
      list: "vip/list",
    }),
  },
  methods: {
    ...mapActions({
      reqListAction: "vip/reqListAction",
    }),
    //点击了编辑按钮
    edit(uid) {
      this.$emit("edit",uid);
    },
  },
  mounted() {
    this.reqListAction();
  },
};
</script>
<style scoped>
</style>