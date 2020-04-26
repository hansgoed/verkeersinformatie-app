const state = {
    roadName: String,
    date: Date
}

const getters = {}

const actions = {
    applyRoadFilter(context, payload) {
        context.commit('setRoadFilter', payload);
    },
    applyDateFilter(context, payload) {
        context.commit('setDateFilter', payload);
    }
}

const mutations = {
    setRoadFilter(state, roadName) {
        state.roadName = roadName;
    },
    setDateFilter(state, date) {
        state.date = date;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}