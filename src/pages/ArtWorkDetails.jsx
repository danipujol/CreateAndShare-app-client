import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneArtwork } from "../services/artworks.services";
import { AuthContext } from "../context/auth.context";
import CommentsContainer from "../components/CommentsContainer";
import {
  createComment,
  getCommentsByArtwork,
} from "../services/comments.services";

function ArtWorkDetails() {
  const [details, setdetails] = useState(null);
  const navigate = useNavigate();
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const [opinion, setOpinion] = useState("");
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState(null);
  const [isUpdate, setIsUpDate] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getArtwork();
  }, []);
  useEffect(() => {
    getComments();
  }, [isUpdate]);

  const getArtwork = async () => {
    try {
      const response = await getOneArtwork(id);
      setdetails(response.data);
      //  console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  const getComments = async () => {
    try {
      const response = await getCommentsByArtwork(id);

      setComment(response.data);
      console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createComment(id, opinion);
      setIsUpDate(!isUpdate);
      // navigate(`/obra/${id}/detalles`)
      setOpinion("");
    } catch (error) {
      navigate("/error");
    }
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center">
      <div>
        <h1>{details.title}</h1>
        <img src={details.image} alt="" />
      </div>
      <div>
        <h2>Creado por: {details.creator.username}</h2>
        <p>Descripción: {details.description}</p>
        <p>Año de creación: {details.yearOfCreation}</p>
        <p>Tipo de arte: {details.typeOfArt}</p>
      </div>
      <div>
        <h2>Comentarios</h2>
        {comment &&
          comment.map((eachComent) => {
            return (
              <div>
                <h4>{eachComent.userComment}</h4>
                <p>{eachComent.opinion}</p>
                <p>data</p>
              </div>
            );
          })}
      </div> 
      <div>
        <h3>Añadir Comentario</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ArtWorkDetails;
