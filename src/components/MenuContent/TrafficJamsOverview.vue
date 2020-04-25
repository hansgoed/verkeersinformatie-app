<template>
    <span>
        <TrafficJam
                v-for="trafficJam in trafficJams"
                :key="trafficJam.id"
                v-bind:road="trafficJam.road"
                v-bind:created-at="trafficJam.createdAt"
                v-bind:resolved-at="trafficJam.resolvedAt"
                v-bind:start-location="trafficJam.startLocation"
                v-bind:end-location="trafficJam.endLocation"
        />
    </span>

</template>

<script>
    import {mapState} from "vuex";
    import TrafficJam from "./TrafficJam";

    export default {
        components: {TrafficJam},
        computed: mapState({
            trafficJams: function (state) {
                return state.trafficJams.all;
            }
        }),
        created() {
            this.$store.dispatch('trafficJams/getAllTrafficJams')
        }
    }
</script>

<style scoped>

</style>