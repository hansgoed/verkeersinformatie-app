import Axios from "axios";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllRoads(context) {
        Axios.get('http://trafficinfo.localhost/roads')
            .then(function (response) {
                context.commit("setRoads", response.data)
            })
            .catch(function (error) {
                context.commit("throwError", error)
            });
    }
}

const mutations = {
    setRoads(state, roads) {
        state.all = roads;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}