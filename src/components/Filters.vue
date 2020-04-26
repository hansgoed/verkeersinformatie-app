<template>
    <b-card>
        <b-card-body>
            <b-form-select v-bind:value="roadFilter" v-on:change="setRoadFilter">
                <b-form-select-option :value="null">Alle wegen</b-form-select-option>
                <b-form-select-option
                    v-bind:key="road.id"
                    v-for="road in roads"
                    v-bind:value="road.name"
                >
                    {{road.name}}
                </b-form-select-option>
            </b-form-select>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        props: {
            selectedTab: String
        },
        computed: {
            roads: function () {
                return this.$store.state.roads.all;
            },
            roadFilter: function () {
                return this.$store.state.filters.roadName;
            }
        },
        methods: {
            setRoadFilter: function (value) {
                this.$store.dispatch('filters/applyRoadFilter', value);
            }
        },
        created() {
            this.setRoadFilter(null);
        }
    }
</script>

<style scoped>

</style>