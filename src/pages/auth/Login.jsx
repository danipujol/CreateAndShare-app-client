import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";

import { AuthContext } from "../../context/auth.context";

function Login() {

  const { authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    // ... login logic here
    try {
      
      const response = await loginService({
        username, 
        password
      })

      console.log(response)

      // 1. guardamos el token en un lugar seguro del navegador (localStorage)
      localStorage.setItem("authToken", response.data.authToken)

      // 2. Validamos el token para saber quien es el usuario y saber si está logeado
      await authenticateUser()

      navigate("/obras")

    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error") // 500
      }
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" 
    style={{ backgroundImage: "url('/fondo3.jpg')",
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
    minHeight: "100vh",
    color: "black",
    height: "550px",
    fontWeight: "bold",
     fontFamily: "Georgia, serif"}}
    >
    <div>
      <h1>Bienvenido de nuevo</h1>
  
      <form onSubmit={handleLogin}>
        <label>Nombre artístico:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
  
        <br />
  
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
  
        <br />
  
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
  );
}

export default Login;