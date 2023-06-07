import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneArtwork } from "../services/artworks.services";
import CommentsContainer from "../components/CommentsContainer";

function ArtWorkDetails() {
  const [details, setdetails] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getArtwork();
  }, []);

  const getArtwork = async () => {
    try {
      const response = await getOneArtwork(id);
      setdetails(response.data);
      //  console.log(response.data);
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
        {/* Renderizar los comentarios existentes aquí */}
      </div>
      <div>
        <CommentsContainer artworkId={id} />
      </div>
    </div>
  );
}

export default ArtWorkDetails;
