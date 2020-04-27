import Axios from "axios";
import config from "../../config";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllRoadworks(context) {
        Axios.get(config.api_host + '/roadworks')
            .then(function (response) {
                context.commit("setRoadworks", response.data)
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
                context.commit("throwError", error)
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