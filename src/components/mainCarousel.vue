<template>
    <v-carousel class="carousel" hide-delimiters height="450">
        <v-carousel-item>
            <v-img class="carousel-img" src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">
                <h1 class="display-2 white--text">
                    Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p class="subheading white--text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <v-btn large color="success">Shop now</v-btn>
            </v-img>
        </v-carousel-item>

<!--                <v-carousel-item>-->
<!--                    <v-img src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"/>-->
<!--                </v-carousel-item>-->

<!--                <v-carousel-item>-->
<!--                    <v-img src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg"/>-->
<!--                </v-carousel-item>-->
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

<style lang="scss">
    .carousel {
        .carousel-img {
            h1 {
                text-shadow: 0 0 5px rgba(0, 0, 0, 0.82);
                padding: 100px 150px 30px;
            }
        }
    }

</style>