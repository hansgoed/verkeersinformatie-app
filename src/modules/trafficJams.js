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
                actions.addOrUpdateTrafficJams(context, response.data)
            })
            .catch(function (error) {
                console.log(error);
                context.commit("throwError", error)
            });
    },

    addOrUpdateTrafficJams(context, trafficJams) {
        for (let trafficJam of trafficJams) {
            context.commit("addOrUpdateTrafficJam", trafficJam)
        }
    }
}

const mutations = {
    addOrUpdateTrafficJam(state, trafficJam) {
        state.all[trafficJam.id] = trafficJam;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}