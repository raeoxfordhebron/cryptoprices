export const priceLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = "5222C259-3A40-49AE-A3B5-4C09BCD5363C"
    return(await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
}