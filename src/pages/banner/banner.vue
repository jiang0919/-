<template>
  <div>
    <el-button type="primary" @click="willAdd">添加</el-button>

    <!-- 表格 -->
    <v-list @edit="edit"></v-list>

    <!-- 添加组件 -->
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
      
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    willAdd(){},
    edit(){},
    info()
  },
  mounted() {},
};
</script>
<style scoped>
</style>