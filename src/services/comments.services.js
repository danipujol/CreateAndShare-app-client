import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/comentarios`,
});

service.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    config.headers.authorization = `Bearer ${authToken}`;
  }
  return config;
});

const createComment = (artworkId, opinion) => {
  return service.post(`/crear/${artworkId}`, { opinion });
};

const getCommentsByArtwork = (artworkId) => {
  return service.get(`/${artworkId}/comentarios`);
};

//   eliminar comentario aqui

export { createComment, getCommentsByArtwork };
