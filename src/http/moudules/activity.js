import axios from '../axios'

/* 
 * 导航栏管理
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/activity/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/activity/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/activity/find/page',
        method: 'post',
        data
    })
}
//查找门店
export const findShop = (regionId) => {
    return axios({
        url: '/activity/find/shop?regionId='+regionId,
        method: 'get'
    })
}


//查找商品
export const findGood = (shopId) => {
    return axios({
        url: '/activity/find/good?shopId='+shopId,
        method: 'get'
    })
}

// 获取所有的区域
export const showAllRegions = () => {
    return axios({
        url: '/region/list',
        method: 'get'
        
    })
}

 
//cos获取临时密钥
export const getTempSecret = () => {
    return axios({
        url:'/upload/create/secret',
        method: 'get'
    })
}
//获取区域的分类信息
export const getCategoryByRegion = (regionId) => {
    return axios({
        url:'/customer/region/category/list?regionId='+regionId,
        method: 'get'
    })
}



  