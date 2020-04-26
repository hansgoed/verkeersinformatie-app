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
                let dateFilter = this.$store.state.filters.date;

                return this.$store.state.trafficJams.all.filter(function (trafficJam) {
                    if (typeof roadFilter === 'function') {
                        roadFilter = null;
                    }
                    if (typeof dateFilter === 'function') {
                        dateFilter = null;
                    }

                    // No filters
                    if (roadFilter === null && dateFilter === null) {
                        return true;
                    }

                    // Road filter does not match.
                    if (roadFilter !== null && trafficJam.road !== roadFilter) {
                        return false;
                    }

                    // No date filter, road matches
                    if (dateFilter === null) {
                        return true;
                    }

                    // Created after the date
                    if (new Date(trafficJam.createdAt).getTime() > dateFilter.getTime()) {
                        return false;
                    }

                    // Currently going on
                    if (trafficJam.resolvedAt === null) {
                        return true;
                    }

                    // Ended before the date
                    if (new Date(trafficJam.resolvedAt).getTime() < dateFilter.getTime())
                    {
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