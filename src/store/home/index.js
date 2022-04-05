// home 小仓库
import { reqCategoryList } from "../../api";
const state = {
    categoryList: []
};
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList;

    }
};
const actions = {
     async categoryList({commit}) {
        let result = await reqCategoryList();
        // console.log(result);
        let res = result.data;
        if(res.code == 200) {
            commit("CATEGORYLIST",res.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}