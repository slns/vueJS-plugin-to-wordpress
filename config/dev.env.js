'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEATHER_API: '"855263d24bd7cab3c03206ce071c46ca"',
  ROOT_API: '"http://localhost"'
})

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Matosinhos&appid=855263d24bd7cab3c03206ce071c46ca')
