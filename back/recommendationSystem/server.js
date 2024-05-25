const axios = require('axios')

const recommenadtionURL = 'http://localhost:3000/recommendation'

async function recommendation(userId) {
    try {
        const response = await axios.post(recommenadtionURL, {
            userId: userId
        })
        return response.data
    } catch(e) {
        console.log('ERROR', e)
        return null
    }
}

module.exports = {
    recommendation
}