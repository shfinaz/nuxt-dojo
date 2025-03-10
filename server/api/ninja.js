
//event object is to get the information about request
//using event object can access query parameter from object.vue ?name=mario
export default defineEventHandler(async (event) => {
    
    //handle query params
    //useQuery tak boleh guna
    // const { name } = getQuery(event)

    // Get POST request body
    //useBody() tak boleh guna
    // const { age } = await readBody(event)

    //api call with private key
    const {data } = await $fetch ('https://api.currencyapi.com/v3/latest?apikey=cur_live_439QgjG7qEYenSnHoV1Rrd3nJbWBo2ufGumfEebo')
    
    //json object
    return data
})