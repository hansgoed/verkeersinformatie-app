const state = {
    selectedTab: String
}

const getters = {}

const actions = {
    changeTab(context, tabTitle) {
        context.commit('setSelectedTab', tabTitle);
    }
}

const mutations = {
    setSelectedTab(state, tabTitle) {
        state.selectedTab = tabTitle;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}