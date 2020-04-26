<template>
    <b-card id="road">
        <b-card-title>
            {{ name }}
        </b-card-title>
        <b-card-body>
            <b-button
                v-if="trafficJamCount !== 0"
                v-on:click="showTrafficJams"
                class="btn-warning"
            >
                <img src="icons/traffic-jam.svg" alt="Files" />
                {{ trafficJamCount }}
            </b-button>
            <b-button v-if="roadworksCount !== 0"
                      v-on:click="showRoadworks"
                      class="btn-warning"
            >
                <img src="icons/road-work.svg" alt="Werkzaamheden" />
                {{ roadworksCount }}
            </b-button>
            <b-button v-if="radarsCount !== 0" class="btn-warning">
                <img src="icons/radar.svg" alt="Flitsers" />
                {{ radarsCount }}
            </b-button>
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
        },
        methods: {
            showTrafficJams: function () {
                this.$store.dispatch('filters/applyRoadFilter', this.name);
            },
            showRoadworks: function () {
                this.$store.dispatch('filters/applyRoadFilter', this.name);
            }
        }
    }
</script>

<style scoped>
    .btn-warning {
        margin-right: 0.5em;
    }

    .btn-warning img {
        width: 30px;
        height: 30px;
    }

</style>