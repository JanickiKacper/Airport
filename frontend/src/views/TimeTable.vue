<template>
    <div style="background: #EFEBE9">
        <v-img src="https://cdn.pixabay.com/photo/2013/03/12/13/46/plane-view-92852_960_720.jpg"
        max-height="500"
        ><h1 class="ml-15 mt-15 white--text"><b>Zaplanuj</b></h1>
        <h1 class="ml-15 white--text"><b>swoje wakacje!</b></h1>
        </v-img>
        <v-container>
            <h1><b>ROZKŁAD LOTÓW:</b></h1>
            <v-btn color="#1E90FF"
                class="mb-3"
                elevation="12"
                @click="change = !change"
            >
                <span class="white--text" v-if="change">PRZYLOTY<v-icon>
                mdi-cached</v-icon></span>
                <span class="white--text" v-else>ODLOTY
                <v-icon> mdi-cached</v-icon></span>
            </v-btn>
            <v-simple-table v-if="change">
                <template v-slot:default>
                <thead class="primary">
                    <tr height=100>
                    <th class="text-center">
                        <h2><b>Miasto</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Dzień tygodnia</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Godzina przylotu</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Linia</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Okres</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Rezerwacje</b></h2>
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  height=100
                    v-for="item in todoList" :key="item.id"
                    >
                    <td class="text-center"><b>{{ item.miasto }}</b></td>
                    <td class="text-center">{{ item.dni_tygodnia }}</td>
                    <td class="text-center">{{ item.godzina_p }}</td>
                    <td class="text-center">{{ item.linia }}</td>
                    <td class="text-center">{{ item.okres }}</td>
                    <td class="text-center">
                        <v-btn :to="{ name: 'TicketView', params: {id: item.id} }">Rezrwuj bilet</v-btn>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            <v-simple-table v-else>
                <template v-slot:default>
                <thead class="primary">
                    <tr height=100>
                    <th class="text-center">
                        <h2><b>Miasto</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Dzień tygodnia</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Godzina odlotu</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Linia</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Okres</b></h2>
                    </th>
                    <th class="text-center">
                        <h2><b>Rezerwacje</b></h2>
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr height=100
                    v-for="item in todoList" :key="item.id"
                    >
                    <td class="text-center"><b>{{ item.miasto }}</b></td>
                    <td class="text-center">{{ item.dni_tygodnia }}</td>
                    <td class="text-center">{{ item.godzina_o }}</td>
                    <td class="text-center">{{ item.linia }}</td>
                    <td class="text-center">{{ item.okres }}</td>
                    <td class="text-center">
                        <v-btn :to="{ name: 'TicketView', params: {id: item.id} }">Rezrwuj bilet</v-btn>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-container>
        <BottomBar />
    </div>
</template>

<script>
import BottomBar from "../components/BottomBar";
import axios from "axios";
export default {
    components: {
        BottomBar,
    },
    
    data:() => ({
    change: true,
    todoList: [],
    todo: {},
    }),
    mounted() {
        this.getList();
    },

    methods: {
        getList() {
            axios.get('http://localhost:8080/api/v11/airport/')
            .then(response => this.todoList = response.data)
        },

    }
}
</script>