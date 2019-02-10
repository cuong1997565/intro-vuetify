<template>
  <div id="app">
<v-toolbar color="indigo" dark>
    <v-toolbar-side-icon  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <router-link to="/">
        <v-toolbar-title class="white--text">Bitfumes</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
       <v-badge left mt-2>
      <span slot="badge">6</span>
      <v-icon
        large
        color="grey lighten-1"
      >
        shopping_cart
      </v-icon>
    </v-badge>
      <v-btn flat>About</v-btn>
      <router-link to="/contact">
              <v-btn flat>Contact</v-btn>
      </router-link>
      <router-link to="/login">
              <v-btn flat>Login</v-btn>
      </router-link>
    </div>
    <div class="hidden-md-and-up">
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-container>
      <v-layout justify-center>
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
         <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      </v-list>


    </v-navigation-drawer>
  </v-layout>
    </div>
  </v-toolbar>
  </div>
</template>
<script>
   export default{
     data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: false,
        right: null
      }
    }
   }
</script>
<style>

</style>
