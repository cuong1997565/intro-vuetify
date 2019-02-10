<template>
<v-container>
    <v-form @submit.prevent="submit">
     <v-alert
      :value="alert"
      type="info"
      color="lime"
    >
      This is a info alert.
    </v-alert>
    <v-text-field
      v-model="email"
      label="E-mail"
      type="text"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      type="password"
      required
    ></v-text-field>
    <v-btn color="green" type="submit">Submit</v-btn>
  </v-form>
</v-container>
</template>
<script>
export default {
    data(){
       return{
        email: null,
        password: null,
        valid: true,
        alert: false
       }
    },
    methods:{
      submit(){
        if(!this.email || !this.password){
               this.alert = true
        }
      }
    }
  }
</script>
<style>
  #fix-css{
      background-color: red;
      display: block !important;
  }
</style>
