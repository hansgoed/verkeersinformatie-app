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
        <NoResultsMessage v-if="filteredRoadworks.length === 0" />
    </span>

</template>

<script>
    import Roadwork from "./Roadwork";
    import NoResultsMessage from "./NoResultsMessage";

    export default {
        components: {NoResultsMessage, Roadwork},
        computed: {
            filteredRoadworks: function () {
                let roadFilter = this.$store.state.filters.roadName;

                return this.$store.state.roadworks.all.filter(function (roadwork) {
                    // Road filter does not match.
                    if (roadFilter !== null && roadwork.road !== roadFilter) {
                        return false;
                    }

                    return true;
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