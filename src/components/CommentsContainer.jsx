import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createComment, getCommentsByArtwork } from "../services/comments.services";

function CommentsContainer() {
  const [opinion, setOpinion] = useState("");
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const { artworkId } = useParams();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await getCommentsByArtwork(artworkId);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createComment(artworkId, opinion);
      setOpinion("");
      fetchComments(); // Actualizar la lista de comentarios después de agregar uno nuevo
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
      <div>
        <h3>Comentarios existentes</h3>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.opinion}</p>
            {/* Mostrar información adicional del comentario si es necesario */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsContainer;