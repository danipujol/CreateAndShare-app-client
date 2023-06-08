import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadArtwork from "../services/uploader.services.js";
import { createArtwork } from "../services/artworks.services.js";


function ArtWorkCreate() {
  //1.useState para cada propiedad

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [typeOfArt, setTypeOfArt] = useState("");
  const [yearOfCreation, setYearOfCreation] = useState("");

  const [imageUploaded, setimageUploaded] = useState(null);

  const navigate = useNavigate();

  //2.crear la funcion para crear

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
        console.log(artwork)

    try {
      //aqui la funcion para enviar los datos al backend
      await createArtwork(artwork)
       //poner un navigate
       navigate("/artistas/mi-perfil")

    } catch (error) {
      navigate("/error");
    }

    console.log(title, description, image, typeOfArt, yearOfCreation);
  };

  return (
    
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "550px"}}>
      <div className="card p-4">
        {!imageUploaded ? (
          <img src={image} alt="No olvides la imagen" />
        ) : (
          <div>Imagen subida correctamente</div>
        )}

        <form onSubmit={handleSubmit} className="mt-3" method="post">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="form-control mb-3"
            type="text"
            placeholder="Título"
            aria-label="Título"
          />

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Imagen
            </label>
            <input
              onChange={(e) => handleUpload(e)}
              className="form-control"
              type="file"
              name="image"
              accept="image/*"
              id="formFile"
            />
          </div>

          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="form-control mb-3"
            type="text"
            placeholder="Descripción"
            aria-label="Descripción"
          />

          <input
            onChange={(e) => setYearOfCreation(e.target.value)}
            value={yearOfCreation}
            className="form-control mb-3"
            type="number"
            min="1800"
            max="2099"
            step="1"
            placeholder="Año de creación"
            aria-label="Año de creación"
          />

          <select
            onChange={(e) => setTypeOfArt(e.target.value)}
            value={typeOfArt}
            className="form-select mb-3"
            aria-label="Selecciona categoría"
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

          <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
    </div>
  );
}

export default ArtWorkCreate;
