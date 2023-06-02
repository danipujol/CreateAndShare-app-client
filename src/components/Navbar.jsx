import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleLogout = () => {
    // 1. borrar el token
    localStorage.removeItem("authToken");
    // 2. validar contra en BE que el token fue borrado
    authenticateUser();
    // 3. redireccionamos a "/"
    navigate("/");
  };

  return (
    <nav>
      {
        /* {isLoggedIn && <Link to="/profile">Profile</Link>}
      {isLoggedIn && <button onClick={handleLogout}>cerrar sesión</button>}
      {!isLoggedIn && <Link to="/auth/signup">Registro</Link>}
      {!isLoggedIn && <Link to="/auth/login">Acceso</Link>} */
        // todo ejemplo de si estamos loggeados o no que podemos ver
      }

      {isLoggedIn && <Link to="/artistas/:artistaId/detalles">Perfil</Link>}
      

      <Link to="/">Home</Link>
      <Link to="/obras">Todas las obras de arte</Link>
      <Link to="/artistas">Todos los artistas</Link>
      <Link to="/auth/login">Entrar</Link>
      <Link to="/auth/signup">Regístrate aquí</Link>
      {isLoggedIn && <button onClick={handleLogout}>Cerrar sesión</button>}
    </nav>
  );
}

export default Navbar;
