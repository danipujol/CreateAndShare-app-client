import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneArtwork } from "../services/artworks.services";

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
     console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <div>
        <h1>{details.title}</h1>
         <img src={details.image} alt="" />
      </div>
       <div>
        <h2>Creado por: {details.creator.username}</h2> 
        <p>Descripción:{details.description}</p>
       <p>Año de creacion:{details.yearOfCreation}</p>
        <p>tipo de arte: {details.typeOfArt}</p>
      </div> 

      <div>
        <p>comentarios</p> 
      </div> 
    </div>
  );
}

export default ArtWorkDetails;
