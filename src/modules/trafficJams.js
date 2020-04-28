import Axios from "axios";
import config from "../../config";

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllTrafficJams(context) {
        let dateTime = null;
        if (typeof context.rootState.filters.date !== 'function') {
            dateTime = context.rootState.filters.date.toISOString();
        }

        Axios.get(config.api_base_url + '/traffic_jams', {
            'params': {
                'datetime': dateTime
            }
        })
            .then(function (response) {
                actions.setTrafficJams(context, response.data)
            })
            .catch(function (error) {
                console.log(error);
                context.commit("throwError", error)
            });
    },

    setTrafficJams(context, trafficJams) {
        context.commit("setTrafficJams", trafficJams)
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