import { useState } from "react";
import { useNavigate} from "react-router-dom"


function ArtWorkCreate() {
  //1.useState para cada propiedad

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ typeOfArt, setTypeOfArt] = useState("");
  const [ yearOfCreation, setYearOfCreation] = useState("");
  
  const navigate = useNavigate();

  //2.crear la funcion para crear

  const handleSubmit = async (e) => {
    e.preventDefault();



    try{
 //aqui la funcion para enviar los datos al backend




    }catch(error){
    navigate("/error")
    }

    console.log(title, description, image, typeOfArt, yearOfCreation);
  };



  //3.navigate
  





  return (
    
<form onSubmit={handleSubmit}> 
    <div>

<input onChange={(e)=> setTitle(e.target.value)} value={title} class="form-control" type="text" placeholder="Título" aria-label="default input example"/>

 <div class="mb-3">
  <label for="formFile" class="form-label">Imagen</label>
  <input class="form-control" type="file" id="formFile"/>
</div>

<input onChange={(e)=> setDescription(e.target.value)} value={description} class="form-control" type="text" placeholder="Descripción" aria-label="default input example"/>

<input onChange={(e) => setYearOfCreation(e.target.value)} value={yearOfCreation} class="form-control"  type="number" min="1800" max="2099" step="1"  placeholder="Año de creación" aria-label="default input example"/> 

<select onChange={(e) => setTypeOfArt(e.target.value)} value={typeOfArt} class="form-select" aria-label="Default select example">
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

<button type="submit">Crear</button>

    </div>

</form>
  )
}

export default ArtWorkCreate