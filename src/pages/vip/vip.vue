<template>
  <div>
    <v-list @edit="edit"></v-list>
    <v-add :info="info" ref="add"></v-add>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import vList from "./components/list";
import vAdd from "./components/add";
export default {
  props: [],
  components: {
    vList,
    vAdd,
  },
  data() {
    return {
      info: {
        //添加弹框的状态
        isshow: false,
      },
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    edit(uid) {
      this.info.isshow = true;
      console.log(this.info.isshow);
      //让add组件发起获取详情的请求
      this.$refs.add.look(uid);
    },
  },
  mounted() {},
};
</script>
<style scoped>
</style>