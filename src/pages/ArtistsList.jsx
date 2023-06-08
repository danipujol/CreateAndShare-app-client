import ArtistContainer from "../components/ArtistContainer.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllArtists } from "../services/artists.services.js";

function ArtistsList() {
  const [artists, setArtists] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = async () => {
    try {
      const response = await getAllArtists();
      setArtists(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!artists) {
    return <div>Loading...</div>;
  }

  return (
    <div
    className="row"
    style={{
        backgroundImage: "url('fondo3.jpg')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        minHeight: "100vh",
        paddingTop: "100px",
        
        color: "white"
      }}>


  

      {artists.map((eachArtist) => {
        return <ArtistContainer key={eachArtist._id} artist={eachArtist} />;
      })}
    </div>
  );
}

export default ArtistsList;
