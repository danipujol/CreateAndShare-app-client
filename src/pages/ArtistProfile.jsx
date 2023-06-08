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
    <div className="text-center"   style={{
      backgroundImage: "url('/fondo3.jpg')",
      backgroundRepeat: "repeat-y",
      backgroundSize: "cover",
      minHeight: "100vh",
      paddingTop: "100px",
      color: "black"
    }}>
    <h1>
      {profile.response.name} {profile.response.firstName}
    </h1>
    <h3>Nombre artístico: {profile.response.username}</h3>
   
    <h5>Ciudad actual: {profile.response.actualCity}</h5>
    <h5>
      Fecha de nacimiento: {profile.response.dateOfBirth.slice(0,10)}
   
    </h5>
    <h6>Contacto: {profile.response.email}</h6>
    <br />
  
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
