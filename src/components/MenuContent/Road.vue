<template>
    <b-card id="road">
        <b-card-title>
            {{ name }}
        </b-card-title>
        <b-card-body>
            <b-badge v-if="trafficJamCount !== 0" class="badge-warning">
                <img src="icons/traffic-jam.svg" width="30"/>
                {{ trafficJamCount }}
            </b-badge>
            <b-badge v-if="roadworksCount !== 0" class="badge-warning">
                <img src="icons/road-work.svg" width="30"/>
                {{ roadworksCount }}
            </b-badge>
            <b-badge v-if="radarsCount !== 0" class="badge-warning">
                <img src="icons/radar.svg" width="30"/>
                {{ radarsCount }}
            </b-badge>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        props: {
            'name': String,
            'trafficJamCount': Number,
            'roadworksCount': Number,
            'radarsCount': Number
        }
    }
</script>

<style scoped>
    .badge-warning {
        margin-right: 0.5em;
        padding-left: 1em;
        padding-right: 1em;
    }

    .badge-warning img {
        width: 30px;
        height: 30px;

        margin: 3px 1em 3px 3px;
    }

</style>