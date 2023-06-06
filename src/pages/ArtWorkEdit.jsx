import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import uploadArtwork from "../services/uploader.services.js";
import { createArtwork, editarArtwork } from "../services/artworks.services.js";
import { getOneArtwork } from "../services/artworks.services.js";

function ArtWorkEdit() {
  const [artwork, setArtwork] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [typeOfArt, setTypeOfArt] = useState("");
  const [yearOfCreation, setYearOfCreation] = useState("");

  const [imageUploaded, setimageUploaded] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getArtworks();
  }, []);

  const getArtworks = async () => {
    try {
      const response = await getOneArtwork(id);
      setArtwork(response.data)
      setTitle(response.data.title);
      setDescription(response.data.description);
      setImage(response.data.image);
      setTypeOfArt(response.data.typeOfArt);
      setYearOfCreation(response.data.yearOfCreation);
      
    } catch (error) {
      navigate("/error");
    }
  };

  if (!artwork) {
    return <div>Loading...</div>;
  }

  const handleUpload = (e) => {
    //funcion para subir imagenes al cloudinary

    const uploadImage = new FormData();
    uploadImage.append("image", e.target.files[0]); // comprobar que sea el nombre de la carpeta de cloudinary ArtWorks
    setimageUploaded(false);
    uploadArtwork(uploadImage)
      .then((response) => {
        setimageUploaded(true);
        setImage(response.data.imageUrl);
      })
      .catch((error) => {
        console.log("Error al subir la imagen ", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const artwork = {
      title,
      description,
      image,
      typeOfArt,
      yearOfCreation,
    };

    try {
      //aqui la funcion para enviar los datos al backend
      await editarArtwork(artwork);
      //poner un navigate
    } catch (error) {
      navigate("/error");
    }

    console.log(title, description, image, typeOfArt, yearOfCreation);
  };

  return (
    <div>
      {!imageUploaded ? (
        <img src={image} alt="Artwork" />
      ) : (
        <div>...Loading</div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          class="form-control"
          type="text"
          placeholder="Título"
          aria-label="default input example"
        />

        <div class="mb-3">
          <label for="formFile" class="form-label">
            Imagen
          </label>
          <input
            onChange={(e) => handleUpload(e)}
            class="form-control"
            type="file"
            name="image"
            accept="image/*"
            id="formFile"
          />
        </div>

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          class="form-control"
          type="text"
          placeholder="Descripción"
          aria-label="default input example"
        />

        <input
          onChange={(e) => setYearOfCreation(e.target.value)}
          value={yearOfCreation}
          class="form-control"
          type="number"
          min="1800"
          max="2099"
          step="1"
          placeholder="Año de creación"
          aria-label="default input example"
        />

        <select
          onChange={(e) => setTypeOfArt(e.target.value)}
          value={typeOfArt}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Selecciona categoría</option>
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
        <br />

        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default ArtWorkEdit;
