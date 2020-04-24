<template>
    <span>
        <Road
            v-for="road in roads"
            :key="road.name"
            v-bind:name="road.name"
            v-bind:traffic-jam-count="road.trafficJams.length"
            v-bind:roadworks-count="road.roadworks.length"
            v-bind:radars-count="road.radars.length"
        >
        </Road>
    </span>
</template>
<script>
    import { mapState } from 'vuex'
    import Road from "./Road";

    export default {
        components: {Road},
        computed: mapState({
            roads: function (state) { return state.roads.all }
        }),
        created() {
            this.$store.dispatch('roads/getAllRoads')
        }
    }
</script>
