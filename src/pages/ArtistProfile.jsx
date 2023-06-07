import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneArtist } from "../services/artists.services";
import ArtworkContainer from "../components/ArtworkContainer";

function ArtistProfile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const { artistaId } = useParams();

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      const response = await getOneArtist(artistaId);

      setProfile(response.data);
      console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center" style={{ backgroundImage: "url('fondoclaro1.jpg')", height: "100vh", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
    <h1>
      {profile.response.name} {profile.response.firstName}
    </h1>
    <h3>Nombre artístico: {profile.response.username}</h3>
    <h4>¡QUIZÁS AÑADIR UN: SOBRE MI (DESCRIPCIÓN)!</h4>
    <h5>Ciudad actual: {profile.response.actualCity}</h5>
    <h5>
      Fecha de nacimiento: {profile.response.dateOfBirth}
      {/* <p>  const dateOfBirth = user.dateOfBirth.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });</p> */}
    </h5>
    <h6>Contacto: {profile.response.email}</h6>
  
    <div style={{ display: "flex", flexWrap: "wrap" }}>

   
      
      {profile.artWorks.map((eachArtWork) => {
        return (
          <ArtworkContainer key={eachArtWork._id} artwork={eachArtWork} />
        );
      })}
    </div>
  </div>
  );
}

export default ArtistProfile;
