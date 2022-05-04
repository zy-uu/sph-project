import { reqGoodInfo,reqAddOrUpdateShopCart } from '@/api'
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
    },
    async addOrUpdateShopCart({skuId,skuNum}) {
        // ATTENTION: async函数执行返回的结果是一个promise {成功或者失败}
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code == 200) {
            return 'ok';
        }
        else {
            return Promise.reject(new Error("fail"));
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

