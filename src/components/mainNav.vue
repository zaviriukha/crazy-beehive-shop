<template>
    <div>
        <v-text-field placeholder='Search' append-icon='search' style='max-width: 200px'></v-text-field>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn text>home</v-btn>
            <v-btn text>shop</v-btn>
            <v-btn text>about</v-btn>
        </v-toolbar-items>

        <v-img max-width='120' src='https://www.designfreelogoonline.com/wp-content/uploads/2017/01/000789-free-Organic-logo-design-free-food-logo-maker-01.png'></v-img>

        <v-toolbar-items>
            <v-btn text>blog</v-btn>
            <v-btn text>contanct</v-btn>
            <v-btn text>featured</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn text
                       v-on="on"
                >
                    {{currency}} <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
            </template>
            <v-list dense>
                <v-list-tile v-for="(c, index) in currencies" :key="index" @click="currency = c">
                    <v-list-tile-title>{{ c }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-btn icon>
            <v-icon>shopping_cart</v-icon>
        </v-btn>
    </div>

</template>

<script>
    export default {
        name: "mainNav",
        data: () => ({
            currency: 'USD',
            currencies: ['USD', 'EUR']
        })
    }
</script>

<style scoped>

</style>