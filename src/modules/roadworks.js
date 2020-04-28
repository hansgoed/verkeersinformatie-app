import Axios from "axios";
import config from "../../config";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllRoadworks(context) {
        let dateTime = null;
        if (typeof context.rootState.filters.date !== 'function') {
            dateTime = context.rootState.filters.date.toISOString();
        }

        Axios.get(config.api_base_url + '/roadworks', {
            'params': {
                'datetime': dateTime
            }
        })
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