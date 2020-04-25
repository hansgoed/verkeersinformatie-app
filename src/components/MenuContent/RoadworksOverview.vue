<template>
    <span>
        <Roadwork
                v-for="trafficJam in trafficJams"
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
    import Roadwork from "./Roadwork";

    export default {
        components: {Roadwork},
        computed: mapState({
            trafficJams: function (state) {
                return state.roadworks.all;
            }
        }),
        created() {
            this.$store.dispatch('roadworks/getAllRoadworks')
        }
    }
</script>

<style scoped>

</style>