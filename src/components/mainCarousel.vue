<template>
    <v-carousel
            cycle
            show-arrows-on-hover
            class="carousel"
            height="450"
    >
        <v-carousel-item>
            <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">

                <v-row class="fill-height flex-column"
                       align="center"
                       justify="center"
                >

                    <h1 class="display-2 white--text">
                        Lorem ipsum dolor sit amet, consectetur
                    </h1>
                    <p class="subheading white--text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam,
                        quis nostrud exercitation ullamco</p>
                    <v-btn large color="success">Shop now</v-btn>
                </v-row>

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
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
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