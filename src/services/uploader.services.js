import axios from 'axios';

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/uploader`,
})

service.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("authToken")
    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`
    }
    return config
  })

  const uploadArtwork = (image) => {

    return service.post("/", image)
  }

  export default uploadArtwork;