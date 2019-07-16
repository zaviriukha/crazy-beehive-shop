<template>
    <v-app>
        <v-toolbar app>

                <v-text-field placeholder='Search' append-icon='search' style='max-width: 200px'></v-text-field>

                <v-spacer></v-spacer>

                <v-toolbar-items>
                    <v-btn flat>home</v-btn>
                    <v-btn flat>shop</v-btn>
                    <v-btn flat>about</v-btn>
                </v-toolbar-items>

                <v-img max-width='120' src='https://www.designfreelogoonline.com/wp-content/uploads/2017/01/000789-free-Organic-logo-design-free-food-logo-maker-01.png'></v-img>

                <v-toolbar-items>
                    <v-btn flat>blog</v-btn>
                    <v-btn flat>contanct</v-btn>
                    <v-btn flat>featured</v-btn>
                </v-toolbar-items>

                <v-spacer></v-spacer>

                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn flat
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

        </v-toolbar>

        <router-view/>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import MainNav from "./components/mainNav";


    export default {
        name: 'App',
        components: {
            MainNav,
            HelloWorld
        },
        data: () => ({
            currency: 'USD',
            currencies: ['USD', 'EUR']
        })
    }
</script>
