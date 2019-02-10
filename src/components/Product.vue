<template lang="html">
    <div>
        <div id="app">
  <v-app id="inspire">
    <v-layout>
      <v-flex xs12 >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>

            <v-card-actions v-for="">
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</div>
    </div>
</template>
<script>
import API from '@/lib/API'
export default{
mounted(){
this.load();
},
methods:{
  load(){
    API.getProduct().then(products =>{
        console.log(products);
    });
  }
}
}
</script>
<style lang="css">
</style>
