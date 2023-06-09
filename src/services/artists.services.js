import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/artistas`,
});

service.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    config.headers.authorization = `Bearer ${authToken}`;
  }
  return config;
});

const getAllArtists = () => {
  return service.get("/");
};

const getOneArtist = (artistaId) => {
  return service.get(`/${artistaId}/detalles`);
};

const getMyProfile = () => {
  return service.get("/mi-perfil");
};

export { getAllArtists, getOneArtist, getMyProfile };
