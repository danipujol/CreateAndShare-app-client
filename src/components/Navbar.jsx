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


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Quienes somos
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/obras">
                Obras de arte más recientes
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/artistas">
                Todos los artistas
              </Link>
            </li>

            {isLoggedIn && (
              <li class="nav-item">
                <Link class="nav-link" to="/artistas/mi-perfil">
                  Perfil
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li class="nav-item">
              <Link class="nav-link" to="/obra/crear">
                Añadir nueva obra
              </Link>
            </li>
            )}

            {!isLoggedIn && (
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                icono!
                  {/* <PersonFillIcon size={24} /> */}
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <Link class="dropdown-item" to="/auth/login">
                      Entrar
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li class="nav-item">
                    <Link class="dropdown-item" to="/auth/signup">
                      Regístrate aquí
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {isLoggedIn && (
              <button onClick={handleLogout}>Cerrar sesión</button>
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
