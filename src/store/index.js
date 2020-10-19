import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import { state, getters, mutations } from "./mutations"
import { actions } from "./actions"
import menu from "./modules/menu"
import role from "./modules/role"
import admin from "./modules/admin"
import cate from "./modules/cate"
import specs from "./modules/specs"
import goods from "./modules/goods"
import vip from "./modules/vip"
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        menu,
        role,
        admin,
        cate,
        specs,
        goods,
        vip
    }
})