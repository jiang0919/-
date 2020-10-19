import { reqRolelist} from "../../utils/request"
const state={
    //列表
    list:[]
}
const mutations={
    //修改list
    changeList(state,arr){
        state.list=arr
    }
}
const actions={
    reqListAction(context){
        //发请求
        reqRolelist().then(res=>{
            //list有就原样输出没有就输出空数组
            let list=res.data.list?res.data.list:[]
            context.commit("changeList",list)
        })
    }
}
const getters = {
    list(state){
        return state.list
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true

}