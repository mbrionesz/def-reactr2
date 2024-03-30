import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import DetallePokemon from "./components/DetallePokemon";


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} /> 
        <Route path="/pokemones/:id" element={<DetallePokemon />}  />    
      </Routes>
    </div>
  );
};
export default App;
