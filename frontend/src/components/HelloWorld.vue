<template>
  <div style="background: #EFEBE9">
    <v-img
      src="https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=600"
      max-height="500"
    >
      <DigitalClock />
      <h1 class="white--text ml-13 mt-10"><b>WSZĘDZIE</b></h1>
      <h2 class="white--text ml-13"><b>BLISKO</b></h2>
    </v-img>
    <v-container>
      <h1 class="blue--text d-flex justify-center"><b>Aktualne rejsy</b></h1>
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
      <v-data-table
        v-if="change"
        :headers="headersP"
        :items="flightsP"
        :items-per-page="5"
      ></v-data-table>
      <v-data-table
        v-else
        :headers="headersO"
        :items="flightsO"
        :items-per-page="5"
      ></v-data-table>
      <v-row class="mt-10">
        <v-col>
          <v-card
          elevation="12"
          class="pa-2 rounded-xl"
          outlined
          title
          >
          <v-img 
            src="https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg"
            class="rounded-pill"
          >
          </v-img>
          <h3 class="text-center mt-4">Cypr na lato 2022!</h3>
          <h4 class="mt-4 font-weight-light ml-4 mb-4 text-center">
            Kilka dni temu gościliśmy pierwszy samolot wykonujący połączenie na Cypr!
            W związku z nowo nawiązanął współpracą mamy dla was niesamowite zniżki.
            Musicie to koniecznie sprawdzić!
          </h4>
          </v-card>
        </v-col>
        <v-col>
          <v-card
          elevation="12"
          class="pa-2 rounded-xl"
          outlined
          title
          >
          <v-img
            src="https://cdn.pixabay.com/photo/2018/04/27/08/56/water-3354063__340.jpg"
            class="rounded-pill"
          ></v-img>
          <h3 class="text-center mt-4">Luksusowe wakacje na Teneryfie</h3>
          <h4 class="mt-4 font-weight-light ml-4 mb-4 text-center">
            Mażą Ci się wymażone wakacje na wyspie? W takim razie nie możesz tego ominąć!
          </h4>
          </v-card>
        </v-col>
      </v-row>
      <h3 class="blue--text text-center mt-5" elevetion="12"><b>Sprawdź nasz social media:</b></h3>
      <v-simple-table style="background: #EFEBE9">
        <thead>
          <tr>
            <td>
            <v-img
              src="https://icons.iconarchive.com/icons/danleech/simple/32/facebook-icon.png"
              max-height="50px"
              max-width="50px"
              class="mt-10"
            ></v-img>
            <a href="https://www.google.com/?gws_rd=ssl">Facebook</a>
            </td>
            <td>
              <v-img
              src="https://icons.iconarchive.com/icons/designbolts/3d-social/32/Twitter-icon.png"
              max-height="50px"
              max-width="50px"
              class="mt-10"
            ></v-img>
            <a href="https://www.google.com/?gws_rd=ssl">Twitter</a>
            </td>
            <td>
              <v-img
              src="https://img.icons8.com/material-outlined/2x/instagram-new.png"
              max-height="50px"
              max-width="50px"
              class="mt-10"
            ></v-img>
            <a href="https://www.google.com/?gws_rd=ssl">Instagram</a>
            </td>
          </tr>
          <tr>
            <td>
              <v-img src="https://cdn.pixabay.com/photo/2015/03/24/09/02/airport-687256__340.jpg"
                max-height="300"
                max-width="300"
                class="rounded-pill"
              >
              </v-img>
            </td>
            <td>
              <v-card elevation="12" width="300" height="200" class="ma-10 rounded-pill">
                <h2 class="ml-5 text-center"><b>Airport</b></h2>
                <h4 class="ml-5 mt-10 text-center font-weight-light">Sezon na lato 2022 coraz bliżej!</h4>
                <h4 class="ml-5 text-center font-weight-light">W tym roku bardzo się rozwineliśmy dzięki waszemu zaufaniu.</h4>
                <h4 class="ml-16 mt-10 font-weight-light">Dziękujemy!!!</h4>
              </v-card>
            </td>
            <td>
              <v-img src="https://cdn.pixabay.com/photo/2018/07/02/10/59/airport-3511342__340.jpg"
                max-height="300"
                max-width="300"
                class="rounded-pill"
              >
              </v-img>
            </td>
          </tr>
        </thead>
      </v-simple-table>
    </v-container>
    <div></div>
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from "../components/BottomBar"
import DigitalClock from "../components/DigitalClock";
  export default {
    name: 'HelloWorld',
    components: {
      BottomBar,
      DigitalClock,
    },
    data(){
      return {
        change: true,
        headersP: [
          {
            text: 'DATA',
            align: 'start',
            value: 'data',
          },
          {text: 'CZAS', value: "czas"},
          {text: 'KIERUNEK', value: "kurs"},
          {text: 'NR REJSU', value: "rejs", sortable: false},
          {text: 'LINIA', value: "linia"},
          {text: 'STATUS', value: "status", sortable: false},
        ],
        flightsP: [
          {
            data: '21/06',
            czas: '10:15',
            kurs: 'Dublin',
            rejs: 'LO736H',
            linia: 'W!ZZ',
            status: 'WYLĄDOWAŁ',
          },
          {
            data: '21/06',
            czas: '11:15',
            kurs: 'Tokio',
            rejs: 'LOUA89',
            linia: 'LOT',
            status: 'WYLĄDOWAŁ',
          },
          {
            data: '21/06',
            czas: '14:50',
            kurs: 'Dublin',
            rejs: 'AHY6AD',
            linia: 'RAYNAIR',
            status: 'WYLĄDOWAŁ',
          },
          {
            data: '22/06',
            czas: '9:45',
            kurs: 'Rzym',
            rejs: 'HH8DMA',
            linia: 'W!ZZ',
            status: 'WYLĄDOWAŁ',
          },
          {
            data: '22/06',
            czas: '15:15',
            kurs: 'Brelin',
            rejs: 'KO398D',
            linia: 'RAYNAIR',
            status: '-',
          },
        ],
        headersO: [
        {
          text: 'DATA',
          align: 'start',
          value: 'data',
        },
        {text: 'CZAS', value: "czas"},
        {text: 'KIERUNEK', value: "kurs"},
        {text: 'NR REJSU', value: "rejs", sortable: false},
        {text: 'LINIA', value: "linia"},
        {text: 'STATUS', value: "status", sortable: false},
        ],
        flightsO: [
          {
            data: '21/06',
            czas: '11:15',
            kurs: 'Warszawa',
            rejs: 'YAG63A',
            linia: 'W!ZZ',
            status: '-',
          },
          {
            data: '21/06',
            czas: '16:35',
            kurs: 'Szanghaj',
            rejs: 'OY37D5',
            linia: 'W!ZZ',
            status: 'WYSTARTOWAŁ',
          },
          {
            data: '22/06',
            czas: '8:45',
            kurs: 'Dublin',
            rejs: 'U87DJ1',
            linia: 'LOT',
            status: 'WYSTARTOWAŁ',
          },
          {
            data: '22/06',
            czas: '11:45',
            kurs: 'Dublin',
            rejs: 'SDD87S',
            linia: 'W!ZZ',
            status: '-',
          },
          {
            data: '22/06',
            czas: '15:30',
            kurs: 'Brelin',
            rejs: 'AOUJ9S',
            linia: 'RAYNAIR',
            status: 'WYSTARTOWAŁ',
          },
        ]
      }
    },
    methods: {
      
      
    }
  }
</script>
