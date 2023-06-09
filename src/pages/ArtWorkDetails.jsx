import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getOneArtwork } from "../services/artworks.services";
import { AuthContext } from "../context/auth.context";

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
    <div
      className="text-center"
      style={{
        backgroundImage: "url('/fondo3.jpg')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "black",
        fontWeight: "bold",
        fontFamily: "Georgia, serif",
        paddingTop: "100px",
        paddingBlockEnd: "50px",
      }}
    >
      <div>
        <div>
          <img
            src={details.image}
            alt="No hay imagen"
            style={{ width: "330px" }}
          />
        </div>
        <div>
          <h1>{details.title}</h1>
        </div>
        <div>
          <h2>
            Creado por:{" "}
            <Link to={`/artistas/${details.creator._id}/detalles`}>
              {details.creator.username}
            </Link>
          </h2>
          <p>Descripción: {details.description}</p>
          <p>Año de creación: {details.yearOfCreation}</p>
          <p>Tipo de arte: {details.typeOfArt}</p>
        </div>
      </div>
      <br />
      <br />

      <div
        className="mb-3 pb-3 border-bottom"
        style={{ textDecoration: "underline" }}
      >
        <h2>Comentarios</h2>
      </div>

      {comment &&
        comment.map((eachComent, index) => {
          return (
            <div key={index} className="border-bottom mb-3 pb-3">
              <h4 style={{ textDecoration: "underline" }}>
                {eachComent.userComment.username}
              </h4>
              <h5>{eachComent.opinion}</h5>
              <h6>Enviado el: {eachComent.createdAt.slice(0, 10)}</h6>
            </div>
          );
        })}

      {isLoggedIn && (
        <div>
          <h3>Añadir Comentario</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
              required
            ></textarea>
            <br />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default ArtWorkDetails;
