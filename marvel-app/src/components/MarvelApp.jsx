import CryptoJS from "crypto-js"
import { useEffect, useState } from "react"

export const MarvelApp = () => {

    const [characters, setCharacters] = useState()

    const time_stamp = new Date().getTime()
    const private_api_key = '4f2b96de71aea835f277e495a33b1a12251ba533'
    const public_api_key = '8362db681b76c8471e5a5b3b095fb895'

    const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString();

    useEffect(() => {
        const reqCharacters = async () => {
            const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`)
            const { data } = await resp.json()

            setCharacters(data.results)
        }

        reqCharacters()
    }, []/*Dependecias o que van a actualizar o volver a ejecturar*/)

    console.log(characters);
    
    return (
        <>
          
        </>
    )
}
