import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [actualCity, setActualCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleActualCityChange = (e) => setActualCity(e.target.value);
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    // ... signup logic here

    try {
      const user = {
        username,
        name,
        firstName,
        actualCity,
        dateOfBirth,
        email,
        password,
      };

      await signupService(user);
      navigate("/auth/login");
    } catch (error) {
      // console.log(error.response.status)
      // console.log(error.response.data.errorMessage)
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error"); // 500
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
    height: "550px",fontWeight: "bold", fontFamily: "Georgia, serif"}}>
      <div>
     
        <h1>Registrarse</h1>
      
      

      <form onSubmit={handleSignup}>
        <label>Nombre artístico:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />

        <label>Apellido:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br />

        <label>Ciudad en la que reside:</label>
        <input
          type="text"
          name="actualCity"
          value={actualCity}
          onChange={handleActualCityChange}
        />
        <br />

        <label>Fecha de nacimiento:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
        />
        

        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
<br />

        <button type="submit">Crear cuenta</button>
      </form>
      </div>
    </div>
  );
}

export default Signup;
