import Axios from "axios";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllRoadworks({ commit }) {
        Axios.get('http://trafficinfo.localhost/roadworks')
            .then(function (response) {
                console.log(response);
                commit("setRoadworks", response.data)
            })
            .catch(function (error) {
                console.log(error);
                commit.commit("throwError", error)
            });
    }
}

const mutations = {
    setRoadworks(state, roadworks) {
        state.all = roadworks;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}