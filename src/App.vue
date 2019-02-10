<!-- <template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
                <router-link :to="{name: 'Product'}">Product</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app mini-variant.sync>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CJS Products</v-toolbar-title>
    </v-toolbar>
    <v-content id="fix-style">
      <v-container>
        <v-layout
        >
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template> -->
<!--///////////////////////////-->
<template>
  <div id="app">
    <AppToolbar></AppToolbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppToolbar from '@/components/AppToolbar'
export default {
  name: 'App',
  data: () => ({
    drawer: true
  }),
  components:{AppToolbar,AppFooter}
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#fix-style{
padding: 10px 0px 0px 300px !important;
}
*/</style>
