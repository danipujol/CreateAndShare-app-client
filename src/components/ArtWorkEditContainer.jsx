import { Link, useNavigate } from "react-router-dom";
import { eliminarArtwork } from "../services/artworks.services";

function ArtWorkEditContainer(props) {
  const { artwork } = props;

  // console.log(artwork._id);

  const navigate = useNavigate();

  const handleDeleteArtwork = async () => {


    try{

        await eliminarArtwork(artwork._id);
        navigate("/obras")

    }catch(error){
        navigate("/error")
    }

  }


  return (
    <div className="col-md-4 mb-4">
      <div className="card mx-auto" style={{ width: "18rem", height: "35rem", borderRadius: "2px" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "320px", marginTop: "10px" }}>
          <img src={artwork.image} className="card-img-top" alt="..." style={{ width: "240px", height: "320px" }} />
        </div>
      
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title text-center mb-3">{artwork.title}</h5>
          <Link to={`/obra/${artwork._id}/editar`} className="btn btn-primary">
            Editar
          </Link>
          <br />
          <button onClick={handleDeleteArtwork} className="btn btn-danger">
            Eliminar obra de arte
          </button>
        </div>
      </div>
    </div>
  );}

export default ArtWorkEditContainer;