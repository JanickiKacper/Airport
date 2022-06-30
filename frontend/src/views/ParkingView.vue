<template>
    <div style="background: #EFEBE9">
        <v-img src="https://cdn.pixabay.com/photo/2015/04/12/13/09/car-718781_960_720.jpg" 
        max-height="500"></v-img>
        <v-container>
            <h1 class="primary--text">INFORMACJE</h1>

            <h2 class="mt-5">Port Lotniczy Lublin nie prowadzi rezerwacji miejsc parkingowych.</h2>
            <h4 class="mt-5">Port Lotniczy Lublin dysponuje dwoma parkingami o łącznej pojemności 450 miejsc.
            Płatność za parking może być dokonywana w kasach samoobsługowych zlokalizowanych wewnątrz 
            terminalu i przy wyjściach z terminalu. Płatność za parking może być realizowana przy użyciu 
            monet o nominale 1 zł, 2 zł, 5 zł lub banknotami o nominale 10 zł, 20 zł, 50 zł i 100 zł a 
            także kartami płatniczymi.</h4>
            <h1 class="primary--text mt-10">CENNIK</h1>
            <table>
                <tr>
                    <td><b>Do 10min</b></td>
                    <td><b>Bezpłatne</b></td>
                </tr>
                <tr>
                    <td>Do 1 godz.</td>
                    <td>6 zł</td>
                </tr>
                <tr>
                    <td>Do 2 godz</td>
                    <td>10 zł</td>
                </tr>
                <tr>
                    <td>Każda kolejna godzina</td>
                    <td>4 zł</td>
                </tr>
                <tr>
                    <td>Doba</td>
                    <td>50zł</td>
                </tr>
                <tr>
                    <td>Doba 2-7</td>
                    <td>100zł</td>
                </tr>
                <tr>
                    <td>Każda doba powyżej 7 dni</td>
                    <td>25 zł</td>
                </tr>
                <tr>
                    <td><b>Opłaty dodatkowe</b></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Wjazd na paking bez biletu lub jego utrata</td>
                    <td>500 zł</td>
                </tr>
                <tr>
                    <td>Wydanie karty stałej</td>
                    <td>150 zł</td>
                </tr>
            </table>

            <h4 class="mt-5">Osoby niepełnosprawne - postój do godziny bez opłat.</h4>
            <h3 class="mt-5"><b>Uwaga</b></h3>
            <h4>Parking należy opuścić w ciągu 15 minut od opłacenia biletu.</h4>
        </v-container>
        <BottomBar />
    </div>
</template>

<script>
import BottomBar from "../components/BottomBar"
    export default {
        components: {
            BottomBar,
        }
    }
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>