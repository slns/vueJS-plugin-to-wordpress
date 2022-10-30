<template>
  <div id="appvue">
    <div id="WeatherPlugin" class="alert alert-primary d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
      <div>
            Currently, the temperature in Matosinhos is: {{ getCelsius }} degrees.
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'appvue',
  data() {
    return {
      informations: {
        main: {
          temp: undefined,
        },
      },
    }
  },
  computed: {
    getCelsius() {
      // return Math.round(this.informations.main.temp - 273.15);
      return +((this.informations.main.temp - 273.15).toFixed(2));
    }
  },
  methods: {
    fetchWeather() {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Matosinhos&appid=855263d24bd7cab3c03206ce071c46ca')
      // fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}')
      .then((res) => res.json())
      .then(json => {
          this.informations = json;
        });

      // const options = {
      //   method: 'GET',
      //   headers: {
      //     'X-RapidAPI-Key': 'api_key',
      //     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      //   }
      // };

      // fetch('https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25', options)
      //   .then(response => response.json())
      //   .then(response => console.log(response))
      //   .catch(err => console.error(err));
    }
  },
  mounted() {
    this.fetchWeather()
  },
}
</script>