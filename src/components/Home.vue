<template>
    <div class="container mt-3">
        <div id="home">
            <h1>Home</h1>
            <div class="row">
                <div class="col-md-8 offset-md-2 text-center">
                    <div class="card text-white bg-primary mb-3" style="">
                      <div class="card-header">Current Weather</div>
                      <div class="card-body">
                        <h4 class="card-title">
                            <span v-bind:class="icon[forecast.currently.icon]" class="weather-icon"></span>
                            {{ forecast.currently.summary }}
                        </h4>
                        <div class="card-text">
                            Current Termperature: {{ forecast.currently.temperature }}&degF
                        </div>
                        <div class="card-text">
                            Wind Speed: {{ forecast.currently.windSpeed }} MPH
                        </div>
                        <div class="card-text">
                            Chance of Precipitation: {{forecast.currently.precipProbability}}%
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>

</template>

<script>
    import Api from '@/api.js';
    
    export default {
        name: 'Home',
        data() {
          return {
              forecast: {},
              icon: {
                  'clear-day': 'far fa-sun', 
                  'clear-night': 'far fa-moon', 
                  rain: 'fas fa-umbrella', 
                  snow: 'fas fa-snowflake', 
                  sleet: '', 
                  wind: '', 
                  fog: '', 
                  cloudy: 'fas fa-cloud', 
                  'partly-cloudy-day': 'fas fa-cloud', 
                  'partly-cloudy-night': 'fas fa-cloud',
              }
          };  
        },
        
        mounted() {
            Api.getForecast().then(result => {
                this.forecast = result;
            });    
        },
    };
</script>

<style type="text/css">
    h4 {
        font-size: 3em;
    }
</style>