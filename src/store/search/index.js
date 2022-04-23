import { reqSearchList } from '@/api'
const state = {
    researchList: {}
};
const mutations = {
    SEARCHLIST(state,researchList) {
        state.researchList = researchList;
    }
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqSearchList(params)
        //! proxy error
        let {data:res} = result;
        console.log(res)
        if(res.code == 200) {
            commit("SEARCHLIST",res.data)
        }
    }
};
const getters = {
    goodsList(state){
        return state.researchList.goodsList || [];
    },
    attrsList(state) {
        return state.researchList.attrsList || [];
    },
    trademarkList(state) {
        return state.researchList.trademarkList || []
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}