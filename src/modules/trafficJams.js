import Axios from "axios";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllTrafficJams({ commit }) {
        Axios.get('http://trafficinfo.localhost/traffic_jams')
            .then(function (response) {
                console.log(response);
                commit("setTrafficJams", response.data)
            })
            .catch(function (error) {
                console.log(error);
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