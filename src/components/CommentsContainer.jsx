import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCommentsByArtwork } from "../services/comments.services";

function CommentsContainer(props) {
  const { artworkId } = props;
  const [comment, setComment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = await getCommentsByArtwork(artworkId);

      setComment(response.data);
      console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!comment) {
    return <div>Loading...</div>;
  }


  return (

    <div>


{comment.map((eachComent) => {
    return (

        <div>
        <h4>{eachComent.userComment}</h4>
        <p>{eachComent.opinion}</p>
        <p>data</p>
      </div>

    )
})}
     




    </div>
  );
}

export default CommentsContainer;
