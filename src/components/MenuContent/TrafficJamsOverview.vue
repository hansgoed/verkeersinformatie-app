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
    import TrafficJam from "./TrafficJam";

    export default {
        components: {TrafficJam},
        computed: {
            filteredTrafficJams: function () {
                let roadFilter = this.$store.state.filters.roadName;

                let allTrafficJams = this.$store.state.trafficJams.all;
                if (roadFilter === null) {
                    return allTrafficJams;
                }

                return allTrafficJams.filter(function (trafficJam) {
                    return trafficJam.road === roadFilter;
                });
            }
        },
        created() {
            this.$store.dispatch('trafficJams/getAllTrafficJams')
        }
    }
</script>

<style scoped>

</style>