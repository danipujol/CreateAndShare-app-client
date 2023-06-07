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
    } catch (error) {
      navigate("/error");
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div  className="text-center">
      <div>
        <h1>
          {profile.response.name} {profile.response.firstName}
        </h1>
        <h3>Nombre artístico: {profile.response.username}</h3>
        <h4>¡QUIZÁS AÑADIR UN: SOBRE MI (DESCRIPCIÓN)!</h4>
        <h5>Ciudad actual: {profile.response.actualCity}</h5>
        <h5>
          Fecha de nacimiento: {profile.response.dateOfBirth}(
          {/* <p>  const dateOfBirth = user.dateOfBirth.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });</p> */}
          )
        </h5>
        <h6>Contacto: {profile.response.email}</h6>
        <h1>Obras compartidas</h1>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {profile.artWorks.map((eachArtWork) => {
          return (
            <div className="col-3 mb-3 mx-3">
              <ArtWorkEditContainer
                key={eachArtWork._id}
                artwork={eachArtWork}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyProfile;
