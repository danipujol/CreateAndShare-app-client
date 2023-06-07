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
      backgroundImage: "url('fondoclaro1.jpg')",
      height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}>
      {artists.map((eachArtist) => {
        return <ArtistContainer key={eachArtist._id} artist={eachArtist} />;
      })}
    </div>
  );
}

export default ArtistsList;
