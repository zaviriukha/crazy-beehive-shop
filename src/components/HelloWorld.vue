<template>

    <v-layout
            text-xs-center
            wrap
    >
        <v-flex>
            <main-carousel class="mb-10"/>

            <sections-slider/>

<!--                        <products/>-->
        </v-flex>
    </v-layout>

</template>

<script>
    import MainCarousel from "./mainCarousel";
    import Products from "./products";
    import SectionsSlider from "./functionalСomponents/sectionsSlider";

    export default {
        components: {SectionsSlider, Products, MainCarousel},
        data: () => ({})
    }
</script>

<style lang="scss">

</style>
