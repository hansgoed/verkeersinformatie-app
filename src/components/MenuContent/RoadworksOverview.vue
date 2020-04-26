<template>
    <span>
        <Roadwork
                v-for="roadwork in filteredRoadworks"
                :key="roadwork.id"
                v-bind:road="roadwork.road"
                v-bind:created-at="roadwork.createdAt"
                v-bind:resolved-at="roadwork.resolvedAt"
                v-bind:start-location="roadwork.startLocation"
                v-bind:end-location="roadwork.endLocation"
                v-bind:description="roadwork.description"
        />
    </span>

</template>

<script>
    import {mapState} from "vuex";
    import Roadwork from "./Roadwork";

    export default {
        components: {Roadwork},
        computed: mapState({
            filteredRoadworks: function (state) {
                if (typeof state.filters.roadName !== 'string') {
                    return state.roadworks.all;
                }

                let roadFilter = state.filters.roadName;

                return state.roadworks.all.filter(function (roadwork) {
                    return roadwork.road === roadFilter;
                });
            }
        }),
        created() {
            this.$store.dispatch('roadworks/getAllRoadworks')
        }
    }
</script>

<style scoped>

</style>