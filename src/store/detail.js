import {reqGoodInfo} from '@/api'
const state = {
    goodsList: {}
};
const mutations = {
    GOODINFO(state,goodsList) {
        state.goodsList = goodsList;
    }
};
const actions = {
    async getGoodInfo({commit},skuId) {
        let result = await reqGoodInfo(skuId);
        let {data:res} = result;
        if(res.code == 200) {
            commit("GOODINFO",res.data)
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

