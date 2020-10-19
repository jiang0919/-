<template>
  <div class="login">
    <div class="box">
      <h3 class="con">登录</h3>
      <div class="con">
        <el-input placeholder="请输入账号" clearable></el-input>
      </div>
      <div class="con">
        <el-input placeholder="请输入密码" show-password></el-input>
      </div>
      <div class="con">
        <el-button type="primary" class="btn" @click="log">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    log() {
      this.$router.push("/");
    },
  },
  mounted() {},
};
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #553443, #303d60);
  position: relative;
}
.box {
  width: 400px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 20px;
}
.con {
  text-align: center;
  margin-top: 20px;
}
.btn {
  width: 400px;
}
</style>