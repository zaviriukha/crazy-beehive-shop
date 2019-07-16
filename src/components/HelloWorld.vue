<template>

        <v-layout
                text-xs-center
                wrap
        >
<!--            <v-flex xs12>-->
<!--            <v-img-->
<!--                    :src="require('../assets/logo.svg')"-->
<!--                    class="my-3"-->
<!--                    contain-->
<!--                    height="200"-->
<!--            ></v-img>-->
<!--        </v-flex>-->

            <v-flex>
                <main-carousel />
            </v-flex>
        </v-layout>

</template>

<script>
    import MainCarousel from "./mainCarousel";
    export default {
        components: {MainCarousel},
        data: () => ({

        })
    }
</script>

<style lang="scss">

</style>
