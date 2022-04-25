const axios = require("axios").default

const http = axios.create({
    baseURL: "http://192.168.7.212:3300/api/v1/sap/tutilabs",
    headers: {
        "Content-Type": "application/json",
    },
})

module.exports = http