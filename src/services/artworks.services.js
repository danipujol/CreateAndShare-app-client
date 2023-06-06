import axios from 'axios';

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/obra`,
})

service.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("authToken")
    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`
    }
    return config
  })

  const getAllArtworks = () => {
    return service.get("/")
  }

const getOneArtwork = (id) => {
    return service.get(`/${id}/detalles`)
      }

const createArtwork = (artwork) => {
  return service.post("/crear", artwork)
}

const editarArtwork = (artwork) => {
return service.put(`/${artwork.id}/editar`, artwork)
}

  export {
    getAllArtworks,
    getOneArtwork,
    createArtwork,
    editarArtwork
  }


