<template>
    <span>
        <b-card>
            <b-card-title>File op de {{ road }}</b-card-title>
            <b-card-sub-title>Van {{ startLocation.name }} tot {{ endLocation.name }}</b-card-sub-title>
            <b-card-body>
                <p>{{ description }}</p>
                <p>Eerst gezien
                    <b-link v-b-tooltip.hover v-bind:title="createdAt | moment('D MMMM HH:MM')">
                        {{ createdAt | moment("from") }}
                    </b-link>
                </p>
                <p v-if="resolvedAt !== null">
                    {{ resolvedAt | moment("from") }}
                </p>
            </b-card-body>
        </b-card>
    </span>
</template>

<script>
    export default {
        props: {
            road: String,
            createdAt: Date,
            resolvedAt: Date,
            description: String,
            startLocation: Object,
            endLocation: Object,
        }
    }
</script>

<style scoped>

</style>