// home 小仓库
import { reqCategoryList,reqBanners,reqFloors } from "../../api";
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],

};
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList;
    },
    BANNERS(state,bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    // 这是真实的网络请求
     async categoryList({commit}) {
        let result = await reqCategoryList();
        // console.log(result);
        let res = result.data;
        if(res.code == 200) {
            commit("CATEGORYLIST",res.data);
        }
    },
    //这是mock网络请求
    async getBanners({commit}) {
        let result = await reqBanners();
        let {data:res} = result;
        if(res.code == 200) {
            commit("BANNERS",res.data)
        }
    },
    //这也是mock
    async getFloor() {
        let result = await reqFloors();
        console.log(result)
    }

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}