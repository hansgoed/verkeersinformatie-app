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
            <TrafficJamsOverview />
        </span>
        <span
            id="roadworksOverview"
            v-if="selectedTab === 'Werkzaamheden'"
        >
            <RoadworksOverview />
        </span>
    </span>
</template>
<script>
    import RoadsOverview from "./MenuContent/RoadsOverview";
    import TrafficJamsOverview from "./MenuContent/TrafficJamsOverview";
    import RoadworksOverview from "./MenuContent/RoadworksOverview";

    export default {
        components: {
            RoadworksOverview,
            TrafficJamsOverview,
            RoadsOverview
        },
        props: {
            "selectedTab": String
        }
    }
</script>
