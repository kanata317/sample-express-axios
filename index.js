const axios = require('axios')
const { response } = require('express')

axios.get('http://localhost:3000/').then(response => { console.log(response)})



