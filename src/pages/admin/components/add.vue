<template>
  <div>
    <el-dialog
      :title="info.isAdd ? '用户添加' : '用户修改'"
      :visible.sync="info.isshow"
      @closed="close"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="所属角色">
          <el-select v-model="form.roleid" placeholder="请选择">
            <el-option label="请选择" :value="0"></el-option>
            <el-option
              v-for="item in rolelist"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添 加</el-button
        >
        <el-button type="primary" @click="update" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  reqAdminadd,
  reqAdmindetail,
  reqAdminupdate,
  reqAdminlist,
} from "../../../utils/request";
import { warningAlert, successAlert } from "../../../utils/alert";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      form: {
        roleid: "",
        username: "",
        password: "",
        status: 1,
      },
    };
  },
  computed: {
    ...mapGetters({
      list: "admin/list",
      rolelist: "role/list",
    }),
  },
  methods: {
    ...mapActions({
      reqadministAction: "admin/reqListAction",
      reqroleistAction: "role/reqListAction",
      reqTotalAction: "admin/reqTotalAction",
    }),
    //取消
    cancel() {
      this.info.isshow = false;
    },
    //弹框消失完成
    close() {
      //如果是添加开的弹框，就什么都不做；如果是编辑开的弹框，就清除form
      if (!this.info.isAdd) {
        this.empty();
      }
    },
    //数据重置
    empty() {
      this.form = {
        roleid: "",
        username: "",
        password: "",
        status: 1,
      };
    },
    //点击了添加按钮
    add() {
      reqAdminadd(this.form).then((res) => {
        if (res.data.code == 200) {
          //成功
          successAlert(res.data.msg);

          //数据重置
          this.empty();

          //弹框消失
          this.cancel();

          //list数据要刷新
          this.reqadministAction();
          //重新获取总数
          this.reqTotalAction();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    //获取菜单详情 （1条）
    look(uid) {
      //发请求
      reqAdmindetail(uid).then((res) => {
        if (res.data.code == 200) {
          //这个时候form是没有id的
          this.form = res.data.list;
          this.form.password = "";
          // this.form.id = id;
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    //修改
    update() {
      reqAdminupdate(this.form).then((res) => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cancel();
          this.reqadministAction();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
  },
  mounted() {
    this.reqroleistAction();
  },
};
</script>
<style scoped>
</style>