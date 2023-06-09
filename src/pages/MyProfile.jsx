import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMyProfile } from "../services/artists.services";
import ArtWorkEditContainer from "../components/ArtWorkEditContainer";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function MyProfile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const { isLoggedIn, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      const response = await getMyProfile();

      setProfile(response.data);
      //   console.log(isLoggedIn, authenticateUser);
      console.log("hola", profile);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="row"
      style={{
        backgroundImage: "url('/fondo3.jpg')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "black",
      }}
    >
      <div
        className="text-center"
        style={{
          fontWeight: "bold",
          fontFamily: "Georgia, serif",
          paddingTop: "100px",
          paddingBlockEnd: "50px",
        }}
      >
        <h1 className="display-6" style={{ fontFamily: "Georgia, serif" }}>
          {profile.response.name} {profile.response.firstName}
        </h1>
        <h3>
          Nombre artístico:
          <br />
          {profile.response.username}
        </h3>

        <h5>
          Ciudad actual:
          <br />
          {profile.response.actualCity}
        </h5>
        <h5>
          Fecha de nacimiento:
          <br />
          {profile.response.dateOfBirth.slice(0, 10)}
        </h5>
        <h6>
          Contacto:
          <br />
          {profile.response.email}
        </h6>
        <br />
        <h1>Obras compartidas</h1>
      </div>

      {profile.artWorks.map((eachArtWork) => {
        return (
          <ArtWorkEditContainer key={eachArtWork._id} artwork={eachArtWork} />
        );
      })}
    </div>
  );
}

export default MyProfile;
