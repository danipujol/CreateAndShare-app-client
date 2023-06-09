import ArtworkContainer from "../components/ArtworkContainer";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAllArtworks } from "../services/artworks.services";
import { AuthContext } from "../context/auth.context";

function ArtWorksList() {
  const [artworks, setArtworks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getArtworks();
  }, []);

  useEffect(() => {
    filterArtworks();
  }, [searchText, artworks]);

  const getArtworks = async () => {
    try {
      let response;
      if (searchText) {
        response = await getAllArtworks(searchText);
        setFilteredArtworks(response.data); // filtramos los artworks
      } else {
        response = await getAllArtworks();
        setArtworks(response.data);
        setFilteredArtworks(response.data); // mostramos todos los artworks
      }
    } catch (error) {
      navigate("/error");
    }
  };

  const filterArtworks = () => {
    if (!searchText) {
      setFilteredArtworks(artworks); // mostramos todos los artworks
    } else {
      const filtered = artworks.filter((artwork) =>
        artwork.typeOfArt.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredArtworks(filtered); // filtramos los artworks según el texto de búsqueda
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div
      className="row"
      style={{
        backgroundImage: "url('/fondo3.jpg')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "black",
        fontWeight: "bold",
        fontFamily: "Georgia, serif",
        paddingTop: "100px",
        paddingBlockEnd: "50px",
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
        <h2
          className="display-6"
          style={{ fontWeight: "bold", fontFamily: "Georgia, serif" }}
        >
          {" "}
          Búsqueda
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="d-flex justify-content-center"
        >
          <div className="form-group mx-sm-3">
            <select
              onChange={handleSearchChange}
              value={searchText}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="">Selecciona categoría</option>
              <option value="pintura">Pintura</option>
              <option value="grafitis">Grafiti</option>
              <option value="murales">Mural</option>
              <option value="escultura">Escultura</option>
              <option value="dibujo">Dibujo</option>
              <option value="grabado">Grabado</option>
              <option value="arteDelVidrio">Arte del vidrio</option>
              <option value="orfebrería">Orfebrería</option>
              <option value="ebanistería">Ebanistería</option>
              <option value="cerámica">Cerámica</option>
              <option value="fotografía">Fotografía</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </form>
      </div>

      {filteredArtworks.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        filteredArtworks.map((eachArtwork) => (
          <ArtworkContainer key={eachArtwork._id} artwork={eachArtwork} />
        ))
      )}
    </div>
  );
}

export default ArtWorksList;
