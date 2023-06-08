import { Link, useNavigate } from "react-router-dom";

function ArtworkContainer(props) {
  const { artwork } = props;

  return (
    //poner mismos tamaños
    <div className="col-md-4 mb-4 ">
    <div className="card mx-auto" style={{ width: "15rem" }}>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title text-center mb-3">{artwork.title}</h5>
        <img src={artwork.image} className="card-img-top" alt="..." />
        <Link to={`/obra/${artwork._id}/detalles`} className="btn btn-primary mt-3">
          Detalles de la obra
        </Link>
      </div>
    </div>
  </div>
  );
}

export default ArtworkContainer;