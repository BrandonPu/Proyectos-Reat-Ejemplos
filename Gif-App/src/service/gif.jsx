const api_key = "ZRHZZTKFY9LNRghHeYFVT4ru1IfXXwa0"

export const reqGif = async() => {
  try {
     const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
     const {data} = await resp.json()

    return data.images.original.url

  } catch (err) {
    console.log(err)
  }
}
