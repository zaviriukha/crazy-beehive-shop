<template>
    <v-carousel hide-delimiters height="450">
        <v-carousel-item>
            <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </h1>
            </v-img>




        </v-carousel-item>

<!--        <v-carousel-item>-->
<!--            <v-img src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"/>-->
<!--        </v-carousel-item>-->

<!--        <v-carousel-item>-->
<!--            <v-img src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg"/>-->
<!--        </v-carousel-item>-->
    </v-carousel>
</template>

<script>
    export default {
        name: "mainCarousel",
        data: () => ({
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ]
        })
    }
</script>

<style scoped>

</style>