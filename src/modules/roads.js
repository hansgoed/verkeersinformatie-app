import Axios from "axios";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllRoads({ commit }) {
        Axios.get('http://trafficinfo.localhost/roads')
            .then(function (response) {
                console.log(response);
                commit("setRoads", response.data)
            })
            .catch(function (error) {
                console.log(error);
                commit.commit("throwError", error)
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