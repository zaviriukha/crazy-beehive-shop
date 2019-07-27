<template>
    <carousel-3d :inverse-scaling="500" :perspective="0" :space="400" :display="3" :height="240">
        <slide :index="0">
            <img src="../../assets/images/tomato-sauce-min.jpg"/>

            <div class="section-title">
                <hr/>
                <span class="text-uppercase display-2 white--text">Sauce</span>
                <hr/>
            </div>

        </slide>
        <slide :index="1">
            <img src="../../assets/images/cookies.jpg"/>

            <div class="section-title">
                <hr/>
                <span class="text-uppercase display-2 white--text">Sweets</span>
                <hr/>
            </div>
        </slide>
        <slide :index="2">
            <img src="../../assets/images/smoothie-bow.jpg"/>

            <div class="section-title">
                <hr/>
                <span class="text-uppercase display-2 white--text">healthy food</span>
                <hr/>
            </div>
        </slide>
    </carousel-3d>

</template>

<script>

    export default {
        name: "sectionsSlider",
        data: () => ({
            slides: 3
        }),
    }
</script>

<style lang="scss">
    .carousel-3d-container {
        .carousel-3d-slide {
            padding: 0;

            img {
                background-size: cover;
                background-repeat: no-repeat;
                height: 100%;
            }

            .section-title {
                position: relative;
                bottom: 140px;
                text-align: center;

                span {
                    text-shadow: 6px 1px 2px rgba(0, 0, 0, 0.8);
                }
            }

            hr {
                border: 1px solid cornsilk;
            }

            .title {
                font-size: 22px;
            }
        }
    }
</style>