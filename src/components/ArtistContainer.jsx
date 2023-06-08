import { Link } from "react-router-dom";


function ArtistContainer(props) {
  const { artist } = props;

  return (
    <div className="col-md-4 mb-4">
  <div className="card mx-auto" style={{ width: "15rem", height: "25rem", borderRadius: "2px"  }}>
      
    {/* //!queremos foto del artista? (aqui en principio no, en el perfil quizás si) */}
    <div className="card-body d-flex flex-column align-items-center">
      <h5 className="card-title text-center mb-3">{artist.username}</h5>
    
      
      <img src="imagen.jpg"/> 

      <Link
        to={`/artistas/${artist._id}/detalles`}
        className="btn btn-primary mt-auto"
      >
        Perfil del artista
      </Link>
    </div>
  </div>
</div>
  );
}

export default ArtistContainer;