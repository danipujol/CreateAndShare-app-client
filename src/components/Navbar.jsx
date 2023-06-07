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


    <nav class="navbar navbar-expand-lg bg-body-tertiary underline-navbar border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-center" activeClassName="active" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center" >
            <li class="nav-item">
              <Link class="nav-link text-dark" to="/">
                Quiénes somos
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link text-dark" to="/obras">
                Obras de arte más recientes
              </Link>
            </li>

            <li class="nav-item ">
              <Link class="nav-link text-dark" to="/artistas">
                Todos los artistas
              </Link>
            </li>

            {isLoggedIn && (
              <li class="nav-item">
                <Link class="nav-link text-dark" to="/artistas/mi-perfil">
                  Perfil
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li class="nav-item ">
              <Link class="nav-link text-dark" to="/obra/crear">
                Añadir nueva obra
              </Link>
            </li>
            )}

            {!isLoggedIn && (
              <li class="nav-item text-dark dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
               <i class="bi bi-person-down"></i>
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-down" viewBox="0 0 16 16">
  <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>
                  
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item text-dark">
                    <Link class="dropdown-item text-dark" to="/auth/login">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-lock" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
</svg><i class="bi bi-person-lock">Entrar</i>
                      
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="nav-item text-dark">
                    <Link class="dropdown-item text-dark" to="/auth/signup">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> <i class="bi bi-person-plus">Regístrate aquí</i>

                      
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {isLoggedIn && (
              <button onClick={handleLogout} class="text-dark"  className="btn btn-sm btn-outline-dark"
    >Cerrar sesión</button>
            )}
          </ul>

          {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
