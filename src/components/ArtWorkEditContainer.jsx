import { Link, useNavigate } from "react-router-dom";
import { eliminarArtwork } from "../services/artworks.services";

function ArtWorkEditContainer(props) {
  const { artwork } = props;

  // console.log(artwork._id);

  const navigate = useNavigate();

  const handleDeleteArtwork = async () => {


    try{

        await eliminarArtwork(artwork._id);
        navigate("/artistas/mi-perfil")

    }catch(error){
        navigate("/error")
    }


  }



  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={artwork.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{artwork.title}</h5>
        <Link to={`/obra/${artwork._id}/editar`} class="btn btn-primary">
          Editar
        </Link>
        <button onClick={handleDeleteArtwork} className="btn btn-danger">
          Eliminar obra de arte
        </button>
      
      </div>
      
    </div>
  );
}

export default ArtWorkEditContainer;