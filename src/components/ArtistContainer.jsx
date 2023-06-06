import { Link } from "react-router-dom";

function ArtistContainer(props) {
    const { artist } = props;


  return (
<div class="card" style={{ width: "18rem" }}>
    {/* <img src={artist.image} class="card-img-top" alt="..."/>  */}
    {/* //!queremos foto del artista? (aqui en principio no, en el perfil quizás si) */}
    <div class="card-body">
     <h5 class="card-title">{artist.username}</h5>
     <Link to={`/artistas/${artist._id}/detalles`} class="btn btn-primary">
     Perfil del artista
     </Link>  
    </div>
</div>
  )
}

export default ArtistContainer;