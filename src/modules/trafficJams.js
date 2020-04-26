import Axios from "axios";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllTrafficJams({ commit }) {
        Axios.get('http://trafficinfo.localhost/traffic_jams')
            .then(function (response) {
                commit("setTrafficJams", response.data)
            })
            .catch(function (error) {
                commit.commit("throwError", error)
            });
    }
}

const mutations = {
    setTrafficJams(state, trafficJams) {
        state.all = trafficJams;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}