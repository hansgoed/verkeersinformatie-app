<template>
    <span>
        <TrafficJam
                v-for="trafficJam in filteredTrafficJams"
                :key="trafficJam.id"
                v-bind:road="trafficJam.road"
                v-bind:created-at="trafficJam.createdAt"
                v-bind:resolved-at="trafficJam.resolvedAt"
                v-bind:start-location="trafficJam.startLocation"
                v-bind:end-location="trafficJam.endLocation"
                v-bind:description="trafficJam.description"
        />
    </span>

</template>

<script>
    import {mapState} from "vuex";
    import TrafficJam from "./TrafficJam";

    export default {
        components: {TrafficJam},
        computed: mapState({
            filteredTrafficJams: function (state) {
                if (typeof state.filters.roadName !== 'string') {
                    return state.trafficJams.all;
                }

                let roadFilter = state.filters.roadName;

                return state.trafficJams.all.filter(function (trafficJam) {
                    return trafficJam.road === roadFilter;
                });
            }
        }),
        created() {
            this.$store.dispatch('trafficJams/getAllTrafficJams')
        }
    }
</script>

<style scoped>

</style>