<template>
    <b-card>
        <b-card-body>
            Er zijn geen resultaten gevonden&nbsp;
            <span v-if="hasFilters">
                die voldoen aan de filters
            </span>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "NoResultsMessage",
        computed: {
            hasFilters: function() {
                let roadFilter = this.$store.state.filters.roadName;
                let dateFilter = this.$store.state.filters.date;

                return (roadFilter !== null || dateFilter !== null)
            }
        }
    }
</script>

<style scoped>

</style>