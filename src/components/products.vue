<template>
    <v-container>
        <div class="main-products">
            <h1> Our products</h1>

            <v-layout row wrap class="d-flex justify-space-between">
                <v-flex v-for="i in 3" :key="`4${i}`" xs3>
                    <v-card width="300">
                        <v-img
                                class="white--text"
                                height="200px"
                                src="https://via.placeholder.com/150"
                        >
                        </v-img>
                        <v-card-title>
                            <div>
                                <span class="grey--text headline">Product 1</span><br>
                            </div>
                        </v-card-title>

                        <v-card-text class="justify-space-between d-flex">
                            <div class="text-xs-left" style="flex-basis: 70%!important;">gfnmf gjkfgjkfgiio gjgjndfbf bvnfjkgjgfo gngjgnbjbfj fdjkdfjgf</div>
                            <div class="price" style="flex-basis: 30%!important;">
                                50 грн
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn flat color="orange">Share</v-btn>
                            <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>



        </div>

    </v-container>

</template>

<script>
    export default {
        name: "products"
    }
</script>

<style scoped>

</style>