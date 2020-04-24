<template>
    <div>
        <span id="icon">{{ icon }}</span>
        <span v-once id="text">{{ text }}</span>
    </div>

</template>

<script>
    export default {
        name: "CustomButton",
        props: {
            'icon': String,
            'text': String
        }
    }
</script>

<style scoped>
    * {
        color: #000;
    }

    div {
        float: left;
        border: 1px solid #333;
        margin: 5px;
        padding: 5px;
        text-decoration: none;
    }

    a:active {

    }

    #icon {
        font-size: 24px;
    }

    #text {
        margin-left: 5px;
    }
</style>