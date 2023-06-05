import ArtworkContainer from "../components/ArtworkContainer"
import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { getAllArtworks } from "../services/artworks.services"
 
function ArtWorksList() {

 const [artworks, setArtworks] = useState(null)
 const navigate = useNavigate()
 useEffect(() => {
  getArtworks()
 },[])
 
 const getArtworks = async () => {

  try{

   const response = await getAllArtworks()
   setArtworks(response.data)
  //  console.log(response.data)

  }catch(error){
    navigate("/error")
  }
 }
 if (!artworks) {
  return <div>Loading...</div>}

  return (


    <div>
    {artworks.map((eachArtwork)=>{

    return <ArtworkContainer key={eachArtwork._id} artwork={eachArtwork} />

    })}

   {/* <ArtworkContainer artworkTitle={artworks.artworkTitle} /> */}
 
    </div>
  )
}

export default ArtWorksList