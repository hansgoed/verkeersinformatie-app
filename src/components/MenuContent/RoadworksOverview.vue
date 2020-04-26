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
    import Roadwork from "./Roadwork";

    export default {
        components: {Roadwork},
        computed: {
            filteredRoadworks: function () {
                let roadFilter = this.$store.state.filters.roadName;

                let allRoadworks = this.$store.state.roadworks.all;
                if (roadFilter === null) {
                    return allRoadworks;
                }

                return allRoadworks.filter(function (roadwork) {
                    return roadwork.road === roadFilter;
                });
            }
        },
        created() {
            this.$store.dispatch('roadworks/getAllRoadworks')
        }
    }
</script>

<style scoped>

</style>