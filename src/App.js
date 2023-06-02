
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Signup from "./pages/auth/Signup.jsx"
import Login from './pages/auth/Login.jsx'
import NotFound from './pages/errors/NotFound';
import Error from './pages/errors/Error';
import ArtistsList from './pages/ArtistsList';
import ArtWorkList from './pages/ArtWorksList';
import IsPrivate from './components/auth/IsPrivate';
import ArtistProfile from './pages/ArtistProfile';


function App() {
  return (
    <div className="App">
    
   <Navbar />

<Routes>

<Route path="/" element={<Home />} />
<Route path= "/artistas" element={<ArtistsList />} />
<Route path= "/obras" element={<ArtWorkList/>}/>
<Route path="/artistas/:artistaId/detalles" element={<IsPrivate><ArtistProfile/></IsPrivate>}/>


{/* auth routes */}

<Route path="/auth/signup" element={<Signup />} />
<Route path="/auth/login" element={<Login />} />

{/* error handlers */}

<Route path="*" element={<NotFound />} />
<Route path="*" element={<Error/>} />


</Routes>


    </div>
  );
}

export default App;
