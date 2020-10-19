import axios from "axios"
import qs from "qs"
import Vue from "vue"
Vue.prototype.$imgPre = "http://localhost:3000"
let baseUrl = "/api";

//响应拦截
axios.interceptors.response.use(res => {
    console.group("=====本次请求路径是:" + res.config.url)
    console.log(res);
    console.groupEnd()

    return res;
})

/*********c菜单管理***************/
//添加
export const reqMenuAdd = (params) => {
    return axios({
        url: baseUrl + "/api/menuadd",
        method: "post",
        data: qs.stringify(params)
    })
}

//列表
export const reqMenuList = () => {
    return axios({
        url: baseUrl + "/api/menulist",
        method: "get",
        params: {
            istree: true
        }
    })
}
//删除
export const reqMenuDel = (id) => {
    return axios({
        url: baseUrl + "/api/menudelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}

//1条
export const reqMenuDetail = (id) => {
    return axios({
        url: baseUrl + "/api/menuinfo",
        method: "get",
        params: {
            id: id
        }
    })
}

//修改
export const reqMenuUpdate = (params) => {
    return axios({
        url: baseUrl + "/api/menuedit",
        method: "post",
        data: qs.stringify(params)
    })
}
/*********角色单管理***************/
//添加
export const reqRoleadd = (params) => {
    return axios({
        url: baseUrl + "/api/roleadd",
        method: "post",
        data: qs.stringify(params)
    })
}
//列表
export const reqRolelist = () => {
    return axios({
        url: baseUrl + "/api/rolelist",
        method: "get"
    })
}
//获取一条
export const reqRoledetail = (id) => {
    return axios({
        url: baseUrl + "/api/roleinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
//修改
export const reqRoleupdate = (params) => {
    return axios({
        url: baseUrl + "/api/roleedit",
        method: "post",
        data: qs.stringify(params)
    })
}
//删除
export const reqRoleDel = (id) => {
    return axios({
        url: baseUrl + "/api/roledelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}
/*********管理员管理***************/
//添加
export const reqAdminadd = (params) => {
    return axios({
        url: baseUrl + "/api/useradd",
        method: "post",
        data: qs.stringify(params)
    })
}
//管理员总数 （用于计算分页）
export const reqAdminsum = () => {
    return axios({
        url: baseUrl + "/api/usercount",
        method: "get"
    })
}
//列表 (分页)params={page:1,size:10}
export const reqAdminlist = (params) => {
    return axios({
        url: baseUrl + "/api/userlist",
        method: "get",
        params: params
    })
}
//获取一条 
export const reqAdmindetail = (uid) => {
    return axios({
        url: baseUrl + "/api/userinfo",
        method: "get",
        params: {
            uid: uid
        }
    })
}
//修改
export const reqAdminupdate = (params) => {
    return axios({
        url: baseUrl + "/api/useredit",
        method: "post",
        data: qs.stringify(params)
    })
}
//删除
export const reqAdmindel = (uid) => {
    return axios({
        url: baseUrl + "/api/userdelete",
        method: "post",
        data: qs.stringify({ uid: uid })
    })
}
//登录 params{username:username,password:password}
export const reqAdminlogin = (username, password) => {
    return axios({
        url: baseUrl + "/api/userlogin",
        method: "post",
        data: { username: username, password: password }
    })
}
/*********商品分类管理***************/
//添加 params={pid:1,catename:"123",img:File,state:1}
export const reqCateAdd = (params) => {
    let data = new FormData()
    /*
    data.append("pid",1)
    data.append("catename","123")
    data.append("img",File)
    data.append("status",1)
    */
    for (let i in params) {
        data.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/cateadd",
        method: "post",
        data: data
    })
}

//列表 params={istree:true}  {pid:0}
export const reqCateList = (params) => {
    return axios({
        url: baseUrl + "/api/catelist",
        method: "get",
        params: params
    })
}
//删除
export const reqCateDel = (id) => {
    return axios({
        url: baseUrl + "/api/catedelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}

//1条
export const reqCateDetail = (id) => {
    return axios({
        url: baseUrl + "/api/cateinfo",
        method: "get",
        params: {
            id: id
        }
    })
}

//修改
export const reqCateUpdate = (params) => {
    let data = new FormData()
    for (let i in params) {
        data.append(i, params[i])
    }
    return axios({
        url: baseUrl + "/api/cateedit",
        method: "post",
        data: data
    })
}
/*********商品规格管理***************/
//添加 params={pid:1,catename:"123",img:File,state:1}
export const reqSpecsAdd = (params) => {
    return axios({
        url: baseUrl + "/api/specsadd",
        method: "post",
        data:qs.stringify(params) 
    })
}
//管理员总数 （用于计算分页）
export const reqSpecssum = () => {
    return axios({
        url: baseUrl + "/api/specscount",
        method: "get"
    })
}
//列表 (分页)params={page:1,size:10}
export const reqSpecslist = (params) => {
    return axios({
        url: baseUrl + "/api/specslist",
        method: "get",
        params: params
    })
}
//获取一条 
export const reqSpecsdetail = (id) => {
    return axios({
        url: baseUrl + "/api/specsinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
//修改
export const reqSpecsupdate = (params) => {
    return axios({
        url: baseUrl + "/api/specsedit",
        method: "post",
        data: qs.stringify(params)
    })
}
//删除
export const reqSpecsdel = (id) => {
    return axios({
        url: baseUrl + "/api/specsdelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}
/*==========商品管理=================*/
//添加
export const reqGoodsAdd = (form) => {
    let data = new FormData()
    for (let i in form) {
        data.append(i, form[i])
    }
    return axios({
        url: baseUrl + "/api/goodsadd",
        method: "post",
        data: data
    })
}

//总数
export const reqGoodsCount = () => {
    return axios({
        url: baseUrl + "/api/goodscount"
    })
}

//列表
export const reqGoodsList = (params) => {
    return axios({
        url: baseUrl + "/api/goodslist",
        method: "get",
        params: params
    })
}

//详情 params={id:'1'}
export const reqGoodsDetail = (params) => {
    return axios({
        url: baseUrl + "/api/goodsinfo",
        method: "get",
        params: params
    })
}
//修改
export const reqGoodsUpdate = (form) => {
    let data = new FormData()
    for (let i in form) {
        data.append(i, form[i])
    }
    return axios({
        url: baseUrl + "/api/goodsedit",
        method: "post",
        data: data
    })
}
//删除 params={id:'1'}
export const reqGoodsDel = (params) => {
    return axios({
        url: baseUrl + "/api/goodsdelete",
        method: "post",
        data: qs.stringify(params)
    })
}



/*==========会员管理=================*/


//列表
export const reqVipList = () => {
    return axios({
        url: baseUrl + "/api/memberlist",
        method: "get",
    })
}

//详情
export const reqVipDetail = (uid) => {
    return axios({
        url: baseUrl + "/api/memberinfo",
        method: "get",
        params:{
            uid:uid
        }
    })
}
//修改
export const reqVipUpdate = (params) => {

    return axios({
        url: baseUrl + "/api/memberedit",
        method: "post",
        data: params
    })
}
