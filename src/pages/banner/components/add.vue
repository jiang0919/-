<template>
  <div class="add">
    <el-dialog
      :title="info.isAdd ? '轮播图添加' : '轮播图修改'"
      :visible.sync="info.isshow"
      @closed="close"
    >
      <el-form-item label="标题">
        <el-input v-model="a"></el-input>
      </el-form-item>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      a: 1,
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    close() {},
  },
  mounted() {},
};
</script>
<style scoped>
</style>