import { useState } from "react"
import { reqGif } from "../service/gif"

export const useGif = () => {

  const [url, seturl] = useState("")
  
  const handleGetGif = () => {
      reqGif().then((url)=>{
        seturl(url)
      })
  }

  //retorno del hook
  return {
    handleGetGif,
    url
  }
}
