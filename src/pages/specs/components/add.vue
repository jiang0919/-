<template>
  <div class="add">
    <el-dialog
      :title="info.isAdd ? '规格添加' : '规格修改'"
      :visible.sync="info.isshow"
      @closed="close"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="规格名称">
          <el-input v-model="form.specsname"></el-input>
        </el-form-item>

        <!-- <el-form-item label="规格属性">
          <div class="new">
            <el-input v-model="form.attrs"></el-input>
            <el-button type="primary" @click="a">新增规格属性</el-button>
          </div>
        </el-form-item>
        <el-form-item label="规格属性">
          <div class="new">
            <el-input v-model="form.attrs"></el-input>
            <el-button type="danger">删除</el-button>
          </div>
        </el-form-item> -->

        <el-form-item
          label="规格属性"
          v-for="(item, index) in arr"
          :key="index"
        >
          <div class="new">
            <el-input v-model="item.value"></el-input>
            <el-button type="primary" @click="a" v-if="index == 0"
              >新增规格属性</el-button
            >
            <el-button type="danger" v-else @click="del(index)">删除</el-button>
          </div>
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
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  reqSpecsAdd,
  reqSpecsdetail,
  reqSpecsupdate,
} from "../../../utils/request";
import { warningAlert, successAlert } from "../../../utils/alert";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      arr: [{ value: "" }, { value: "" }],
      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
    };
  },
  computed: {
    ...mapGetters({
      list: "specs/list",
    }),
  },
  methods: {
    ...mapActions({
      reqListAction: "specs/reqListAction",
      reqTotalAction: "specs/reqTotalAction",
    }),
    
    //新增规格属性
    a() {
      this.arr.push({ value: "" });
    },
    //删除规格属性
    del(index) {
      this.arr.splice(index, 1);
    },
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
      this.arr = [{ value: "" }, { value: "" }];
      this.form = {
        specsname: "",
        attrs: "",
        status: 1,
      };
    },
     checkedData() {
      //验证规格名称
      if (this.form.specsname == "") {
        warningAlert("规格名称不能为空");
        return false;
      }

      //验证每一个属性值都不能为空
      if (this.arr.some((item) => item.value == "")) {
        warningAlert("所有的属性值都必填");
        return false;
      }
      return true
    },
    //点击了添加按钮
    add() {
      this.form.attrs = JSON.stringify(this.arr.map((item) => item.value));
      console.log(this.form);
      reqSpecsAdd(this.form).then((res) => {
        if (res.data.code == 200) {
          //弹框
          this.cancel();
          successAlert(res.data.msg);
          //数据重置
          this.empty();
          //list数据要刷新
          this.reqListAction();
          //重新获取数据
          this.reqTotalAction();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    //获取菜单详情 （1条）
    look(id) {
      //发请求
      reqSpecsdetail(id).then((res) => {
        if (res.data.code == 200) {
          //这个时候form是没有id的
          this.form = res.data.list[0];
          //'['s','l','m']'--->[{value:'s'},{value:'l'},{value:'m'}]
          this.arr = JSON.parse(this.form.attrs).map((item) => ({
            value: item,
          }));
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    //修改
    update() {
      if (!this.checkedData()) {
        return;
      }

      this.form.attrs = JSON.stringify(this.arr.map((item) => item.value));
      reqSpecsupdate(this.form).then((res) => {
         if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cancel();
          this.reqListAction();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.new {
  display: flex;
}
</style>