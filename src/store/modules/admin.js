import { reqAdminlist, reqAdminsum } from "../../utils/request"
const state = {
    //列表
    list: [],
    //一页的数量
    size: 2,
    //总数
    total: 0,
    //页码
    page: 1,
}
const mutations = {
    //修改list
    changeList(state, arr) {
        state.list = arr
    },
    //修改total
    changeTotal(state, num) {
        state.total = num
    },
    //修改page
    changePage(state, page) {
        state.page = page
    }
}
const actions = {
    reqListAction(context) {
        //发请求
        reqAdminlist({ page: context.state.page, size: context.state.size }).then(res => {
            //list有就原样输出没有就输出空数组
            let list = res.data.list ? res.data.list : []
            if(context.state.page>1&&list.length==0){
                context.commit("changePage",context.state.page-1)
                context.dispatch("reqListAction")
                return;
            }
            context.commit("changeList", list)
        })
    },
    //发起总数的请求
    reqTotalAction(context) {
        //请求
        reqAdminsum().then(res => {
            context.commit("changeTotal", res.data.list[0].total)
        })
    },
    //组件修改了页码
    changePageAction(context,page) {
        //修改页码
        context.commit("changePage", page)
        //发起list请求
        context.dispatch('reqListAction')
    }
}
const getters = {
    list(state) {
        return state.list
    },
    size(state) {
        return state.size
    },
    total(state) {
        return state.total
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true

}