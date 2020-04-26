<template>
    <span>
        <b-card>
            <b-card-title>File op de {{ road }}</b-card-title>
            <b-card-sub-title>Van {{ startLocation.name }} tot {{ endLocation.name }}</b-card-sub-title>
            <b-card-body>
                <p v-if="description !== null">{{ description }}</p>
                <p>Eerst gezien
                    <b-link v-b-tooltip.hover v-bind:title="createdAt | moment('D MMMM HH:mm')">
                        {{ createdAt | moment("calendar") }}
                    </b-link>
                </p>
                <p v-if="resolvedAt !== null">
                    <b-link v-b-tooltip.hover v-bind:title="resolvedAt | moment('D MMMM HH:mm')">
                        {{ resolvedAt | moment("calendar") }}
                    </b-link>
                </p>
            </b-card-body>
        </b-card>
    </span>
</template>

<script>
    export default {
        props: {
            road: String,
            createdAt: String,
            resolvedAt: String,
            description: String,
            startLocation: Object,
            endLocation: Object,
        }
    }
</script>

<style scoped>

</style>