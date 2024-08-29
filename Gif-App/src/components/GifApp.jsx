import { useGif } from "../hooks/useGif"

//funtional component
export const GifApp = () => {

  const{handleGetGif, url} = useGif()

  return (
    <>
    <button onClick={ handleGetGif }>Gif Aleatorio</button>
    <img src={url} alt=""/>
    </>
  )
}
