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
                            <div class="text-xs-left" style="flex-basis: 70%!important;">gfnmf gjkfgjkfgiio gjgjndfbf
                                bvnfjkgjgfo gngjgnbjbfj fdjkdfjgf
                            </div>
                            <div class="price headline" style="flex-basis: 30%!important;">
                                50 грн
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange">Add to card</v-btn>
                            <v-btn text icon color="pink">
                                <v-icon>favorite</v-icon>
                            </v-btn>
                            <v-select
                                    :items="items"
                                    placeholder="1"
                                    height="25"
                                    solo
                            ></v-select>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>


        </div>

    </v-container>

</template>

<script>
    export default {
        name: "products",
        data: () => ({
            items: ['1', '2', '3', '4'],
        }),
    }
</script>

<style lang="scss">
    .v-text-field__details {
        display: none;
    }

    .v-input__slot {
        margin-bottom: 0;
    }
</style>