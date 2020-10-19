import Vue from "vue"
let vm = new Vue()
//正确弹框
export const successAlert = (msg) => {
    vm.$message({
        message: msg,
        type: "success"
    });
}
//错误弹框
export const warningAlert = (msg) => {
    vm.$message({
        message: msg,
        type: "warning"
    });
}