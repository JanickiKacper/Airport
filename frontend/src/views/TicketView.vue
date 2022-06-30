<template> 
    <div style="background: #EFEBE9">
        <v-img src="https://cdn.pixabay.com/photo/2015/07/31/05/06/sky-868659__340.jpg" 
        max-height="500">
            <h1 class="white--text ml-15 mt-15">{{todo.miasto}}</h1>
        </v-img>
        <v-container>
            <v-card class="mt-10">
                <h2 class="ml-5">Klasa ekonomiczna</h2>
                <v-simple-table>
                <thead>
                    <tr>
                    <th class="text-left"> 
                        <h3>{{todo.linia}}</h3>
                    </th>
                    <th>
                        <h3>Lublin-{{todo.miasto}}</h3>
                    </th>
                    <th class="text-right">
                        <v-btn color="purple">Wybierz</v-btn>
                    </th>
                    </tr>
                </thead>
                </v-simple-table>
            </v-card>
            <v-card class="mt-10">
                <h2 class="ml-5">Klasa ekonomiczna premium</h2>
                <v-simple-table>
                <thead>
                    <tr>
                    <th class="text-left"> 
                        <h3>{{todo.linia}}</h3>
                    </th>
                    <th>
                        <h3>Lublin-{{todo.miasto}}</h3>
                    </th>
                    <th class="text-right">
                        <v-btn color="purple">Wybierz</v-btn>
                    </th>
                    </tr>
                </thead>
                </v-simple-table>
            </v-card>
            <v-card class="mt-10">
                <h2 class="ml-5">Klasa biznes</h2>
                <v-simple-table>
                <thead>
                    <tr>
                    <th class="text-left"> 
                        <h3>{{todo.linia}}</h3>
                    </th>
                    <th>
                        <h3>Lublin-{{todo.miasto}}</h3>
                    </th>
                    <th class="text-right">
                        <v-btn color="purple">Wybierz</v-btn>
                    </th>
                    </tr>
                </thead>
                </v-simple-table>
            </v-card>
            <v-card class="mt-10">
                <h2 class="ml-5">Klasa pierwsza</h2>
                <v-simple-table>
                <thead>
                    <tr>
                    <th class="text-left"> 
                        <h3>{{todo.linia}}</h3>
                    </th>
                    <th>
                        <h3>Lublin-{{todo.miasto}}</h3>
                    </th>
                    <th class="text-right">
                        <v-btn color="purple">Wybierz</v-btn>
                    </th>
                    </tr>
                </thead>
                </v-simple-table>
            </v-card>
        </v-container>
        <BottomBar />
    </div>
</template>

<script>
import BottomBar from "../components/BottomBar";
import axios from "axios";
export default {
    name: "TicketView",
    components: {
        BottomBar,
    },
    data: () => ({
        todo: {},
    }),
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            const TodoID = this.$route.params.id;
            axios.get(`http://localhost:8080/api/v11/airport/${TodoID}/`)
            .then(response => this.todo = response.data)
        }
    }
}
</script>

<style>
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>