import Axios from "axios";
import config from "../../config";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllRoads(context) {
        Axios.get(config.api_host + '/roads')
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