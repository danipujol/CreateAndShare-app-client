import service from "./config.services";

const signupService = (user) => {
  // user => username, password
  return service.post("/auth/signup", user);
};

const loginService = (credentials) => {
  // credentials => username, password
  return service.post("/auth/login", credentials);
};

const verifyService = () => {
  // pasaremos el token
  return service.get("/auth/verify");
};

export { signupService, loginService, verifyService };

//todo -> habra un service para cada ruta que tenga en el server BE (exepto index)
