import requests from "./request"
import mockRequests from './mockrequest'
// 三级联动接口

export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

export const reqBanners = () => mockRequests.get('/banners')

export const reqFloors = () => mockRequests.get('/floors')