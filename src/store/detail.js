import { reqGoodInfo } from '@/api'
const state = {
    goodsList: {}
};
const mutations = {
    GOODINFO(state, goodsList) {
        state.goodsList = goodsList;
    }
};
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodInfo(skuId);
        let { data: res } = result;
        console.log(res)
        if (res.code == 200) {
            commit("GOODINFO", res.data)
        }
    }
};
const getters = {
    categoryView(state) {
        return state.goodsList.categoryView || {};
    },
    skuInfo(state) {
        return state.goodsList.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodsList.spuSaleAttrList || {};
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}

