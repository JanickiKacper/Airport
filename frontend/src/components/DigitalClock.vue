<template>
    <div>
        <h1 id="time">{{ localTime }}</h1>
    </div>
</template>

<script>
export default {

    data(){
        return {
        localTime: " "
        }
    },
    
    methods:{
    showLocaleTime: function () {
      var time = this;
      setInterval(function () {
       time.localTime = new Date().toLocaleTimeString();
    }, 1000);
   }
  },
 mounted () {
  this.showLocaleTime()
        }
}
</script>

<style>
    #time {
        color: rgb(61, 170, 243);
        text-align: right;
        margin-right: 15px;
        text-shadow: 0 0 10px blue
    }
</style>
