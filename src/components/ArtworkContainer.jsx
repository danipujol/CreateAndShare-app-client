import { Link, useNavigate } from "react-router-dom";

function ArtworkContainer(props) {
  const { artwork } = props;

  // console.log(artwork._id);

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={artwork.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{artwork.title}</h5>
        <Link to={`/obra/${artwork._id}/detalles`} class="btn btn-primary">
          Ve a los detalles
        </Link>
      </div>
    </div>
  );
}

export default ArtworkContainer;
