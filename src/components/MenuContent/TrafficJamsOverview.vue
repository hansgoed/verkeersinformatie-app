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

                return this.$store.state.trafficJams.all.filter(function (trafficJam) {
                    // Road filter does not match.
                    if (roadFilter !== null && trafficJam.road !== roadFilter) {
                        return false;
                    }

                    return true;
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