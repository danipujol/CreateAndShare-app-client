
import { useState } from "react"

function Search(props) {

const [searchInput, setSearchInput] = useState("")

const handleSearchChange = (event) => {
  //1.guardar el valor en el estado
  setSearchInput(event.target.value)

  //2.tendremos que filtrar el array de todos los productos

  props.searchProduct(event.target.value)


}
  return (
    <div>
<h2> Busquedas</h2>

<input type="text" name="search" value={searchInput} onChange={handleSearchChange}/>

    </div>
  )
}

export default Search