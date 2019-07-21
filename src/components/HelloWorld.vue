<template>

    <v-layout
            text-xs-center
            wrap
    >
        <v-flex>
            <main-carousel/>
            <products/>
        </v-flex>
    </v-layout>

</template>

<script>
    import MainCarousel from "./mainCarousel";
    import Products from "./products";

    export default {
        components: {Products, MainCarousel},
        data: () => ({})
    }
</script>

<style lang="scss">

</style>
