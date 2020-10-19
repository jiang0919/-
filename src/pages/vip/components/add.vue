<template>
  <div>
    <!-- <el-dialog title="会员修改"  @closed="close"> -->
    <el-dialog :visible.sync="info.isshow">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
          <p>留空则不修改</p>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="update">修改</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { reqVipDetail, reqVipUpdate} from "../../../utils/request";
import { warningAlert, successAlert } from "../../../utils/alert";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      form: {
        uid: "",
        nickname: "",
        phone: "",
        password: "",
        status: "",
      },
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({
        reqListAction:'vip/reqListAction'
    }),
    //取消
    cancel() {
      this.info.isshow = false;
    },
      empty() {
      this.form = {
        rolename: "",
        menus: "[]",
        status: 1,
      }
    },
     //弹框消失完成
    close() {
      //如果是添加开的弹框，就什么都不做；如果是编辑开的弹框，就清除form
      if (!this.info.isAdd) {
        this.empty();
      }
    },
    //获取一跳详情数据
    look(uid) {
      reqVipDetail(uid).then((res) => {
        // console.log(res.data.list);
        if (res.data.code == 200) {
          //   successAlert(res.data.msg);
          this.form = res.data.list;
          this.form.password = "";
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    update() {
      reqVipUpdate(this.form).then((res) => {
          console.log(this.form);
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cancel();
          this.reqListAction();
        }
      });
    },
  },
  mounted() {
        this.reqListAction();
  },
};
</script>
<style scoped>
</style>