<template>
    <span>
        <span
            id="roadsOverview"
            v-if="selectedTab === 'Wegen'"
        >
            <RoadsOverview />
        </span>
        <span
            id="trafficJamsOverview"
            v-if="selectedTab === 'Files'"
        >
            files
        </span>
        <span
            id="roadworksOverview"
            v-if="selectedTab === 'Werkzaamheden'"
        >
            werkzaamheden
        </span>
    </span>
</template>
<script>
    import { mapState } from 'vuex'
    import RoadsOverview from "./MenuContent/RoadsOverview";

    export default {
        components: {RoadsOverview},
        props: {
            "selectedTab": String
        },
        computed: mapState({
            trafficJams: function (state) { return state.trafficJams.all },
            roadworks: function (state) { return state.roadworks.all }
        }),
        created() {
            this.$store.dispatch('roads/getAllRoads')
        }
    }
</script>
