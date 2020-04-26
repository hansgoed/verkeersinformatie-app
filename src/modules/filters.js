const state = {
    roadName: String
}

const getters = {}

const actions = {
    applyRoadFilter(commit, payload) {
        commit.commit('setRoadFilter', payload)
    }
}

const mutations = {
    setRoadFilter(state, roadName) {
        state.roadName = roadName;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}