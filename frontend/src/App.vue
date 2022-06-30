<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Airport Logo"
          class="shrink mr-2"
          contain
          src="https://cdn-icons-png.flaticon.com/128/1227/1227993.png?ga=GA1.2.1707930923.1655895514"
          transition="scale-transition"
          width="40"
        />

        <h1>Airport</h1>
        <v-switch
          class="mt-5 ml-5"
          color="black"
          v-model="$vuetify.theme.dark"
          inset
          persistent-hint
        ></v-switch>
      </div>

      <v-list color="primary" class="ml-3">
          <v-list-item
            href="http://localhost:8080/">
            <v-list-item-title>Strona Główna</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary" class="ml-3">
          <v-list-item
            href="http://localhost:8080/RozkladLotow">
            <v-list-item-title>Rozkład lotów</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary" class="ml-3">
          <v-list-item
            href="http://localhost:8080/ParkingView">
            <v-list-item-title>Parking</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary" class="ml-3">
          <v-list-item
            href="http://localhost:8080/">
            <v-list-item-title>Przed podróżą</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary" class="ml-3">
          <v-list-item
            href="http://localhost:8080/">
            <v-list-item-title>Dojazd</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary" class="ml-3">
          <v-list-item
            href="http://localhost:8080/">
            <v-list-item-title>Usługi</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary" class="ml-3">
          <v-list-item
            href="http://localhost:8080/">
            <v-list-item-title>Zakupy</v-list-item-title>
          </v-list-item>
        </v-list>
        

      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list color="primary"  elevation="24">
          <v-list-item 
            href="http://localhost:8080/Login">
            <v-list-item-title class="white--text">Logowanie</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary"  elevation="24">
          <v-list-item
            href="http://localhost:8080/Rejestracja"
          >
            <v-list-item-title class="white--text">Rejestracja</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="primary"  elevation="24">
          <v-list-item
            @click="logout()"
          >
            <v-list-item-title class="white--text">Wyloguj</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',

  data: () => {
    return {
      
    }
  },
  beforeCreate(){
      this.$store.commit('initializeStore')

      if(this.$store.state.token) {
        axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    },
    methods: {
      async logout(){
        await axios
          .post("http://localhost:8080/api/v1/token/logout/")
            .then(response => {
              console.log(response)
            })
          axios.defaults.headers.common['Authorization'] = ""
          localStorage.removeItem('token')
          this.$store.commit('removeToken')

          this.$router.push('/Login')
      }
    }
};
</script>
