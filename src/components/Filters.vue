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
            <date-picker value="dateFilter" v-bind:config="datePickerOptions" v-on:dp-change="setDateFilter"/>
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
            },
            dateFilter: function () {
                return this.$store.state.filters.date;
            },
            datePickerOptions: function () {
                return {
                    format: 'DD-MM-YYYY HH:mm'
                }
            }
        },
        methods: {
            setRoadFilter: function (value) {
                this.$store.dispatch('filters/applyRoadFilter', value);
            },
            setDateFilter: function (value) {
                if (typeof value.date === 'undefined') {
                    return;
                }

                console.log('setting date filter', new Date(value.date));

                this.$store.dispatch('filters/applyDateFilter', new Date(value.date));
                this.$store.dispatch('trafficJams/getAllTrafficJams');
                this.$store.dispatch('roadworks/getAllRoadworks');
            }
        },
        created() {
            this.setRoadFilter(null);
            this.setDateFilter(new Date());
        }
    }
</script>

<style scoped>

</style>