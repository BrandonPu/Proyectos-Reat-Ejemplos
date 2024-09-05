import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"

export const useCharacters = () => {

    const [characters, setCharacters] = useState()

    useEffect(() => {
        // Si no tiene dependencias solo se ejecuta en la primera carga del componente
        //si si tiene dependencias, Se ejectuta cada que la dependencia cambia
        
        reqCharacters().then((data) =>{
            setCharacters(data.results)
        })
    }, []/*dependecias o que van a actualizar o volver a ejecturar*/)


    //retorno hook
    return {
        characters,
    }
}
