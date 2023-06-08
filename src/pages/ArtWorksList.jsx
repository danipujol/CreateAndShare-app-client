import ArtworkContainer from "../components/ArtworkContainer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllArtworks } from "../services/artworks.services";

function ArtWorksList() {
  const [artworks, setArtworks] = useState(null);

  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    getArtworks(searchInput);
  }, []);

  const getArtworks = async () => {
    try {
      const response = await getAllArtworks(searchInput); //pasar el parametre
      setArtworks(response.data);
      //  console.log(response.data)
    } catch (error) {
      navigate("/error");
    }
  };

  

// const handleSearchChange = (event) => {
//   //1.guardar el valor en el estado
//   setSearchInput(event.target.value)

//   //2.tendremos que filtrar el array de todos los productos




// }

  if (!artworks) {
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
      }}
    >
    
    <div>
<h2> Busquedas</h2>

<form onSubmit={getArtworks}>
  <select onChange={(e) => setSearchInput(e.target.value)} value={searchInput} class="form-select" aria-label="Default select example" >
  <option selected>Open this select menu</option>
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
 <button type="submit" className="btn btn-primary">Buscar</button>
</form>




    </div>


      {artworks.map((eachArtwork) => {
        return <ArtworkContainer key={eachArtwork._id} artwork={eachArtwork} />;
      })}
    </div>
  );
}

export default ArtWorksList;
