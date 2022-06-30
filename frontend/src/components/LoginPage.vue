<template>
    <v-img src="https://cdn.pixabay.com/photo/2017/05/20/20/22/clouds-2329680__340.jpg"
    >
        <v-container>  
            <v-card class="mx-auto mt-15" style="max-width: 500px" elevation="12">
                <h1 class="text-center"><b>Logowanie</b></h1>
                <v-form @submit.prevent="submitForm">
                    <v-text-field
                    class="mt-5 ml-5 mr-5"
                    filled
                    color="deep-purple"
                    :counter="24"
                    label="Login"
                    v-model="username"
                    >
                    </v-text-field>
                    <v-text-field
                    class="ml-5 mr-5"
                    filled
                    color="deep-purple"
                    :counter="24"
                    label="Email"
                    v-model="email"
                    >
                    </v-text-field>
                    <v-text-field
                    class="ml-5 mr-5"
                    filled
                    color="deep-purple"
                    :counter="24"
                    label="Hasło"
                    v-model="password"
                    >
                    </v-text-field>
                    <v-btn class="ml-5 mb-5" type="submit" color="green"
                    >Zaloguj</v-btn>
                </v-form>
            </v-card>
        </v-container>
    </v-img>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            username:'',
            email:'',
            password:'',
        }
    },
    methods: {
        submitForm(){
            const formData = {
                username: this.username,
                email: this.email,
                password: this.password,
            };
            axios
                .post("http://localhost:8080/api/v1/token/login/", formData)
                .then(response => {
                    console.log(response);
                    const token = response.data.auth_token

                    this.$store.commit('setToken', token)
                    axios.defaults.headers.common['Authorization'] = 'Token ' + token
                    localStorage.setItem('token', token)
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>
