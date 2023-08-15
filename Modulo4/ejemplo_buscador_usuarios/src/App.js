import { useState } from "react";
import Resultados from "./Resultados/Resultados";
import Header from "./Header/Header";
import Formulario from "./Formulario/Formulario";
import './App.css';
import { mock1 } from "./constants/users.js";
import CONFIG from "./config/config";

const USE_SERVER = CONFIG.use_server;

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  var data = null;
  const callServer = async (param) => {
    if (USE_SERVER) {
      try {
        let queryparams = "";
        if (param === "all") {
          queryparams = "?limit=" + CONFIG.num_items;
        } else {
          queryparams = "/search?q=" + query;
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        if (response.status !== 200) {
          setError({ error: { description: response.status } });
        } else {
          data = await response.json()
          setResultado(data.users);
          setError(null);
        }
      } catch (error) {
        console.log(error);
        setResultado({ error: { description: error.message } });
      }
    } else {
      //console.log(mock1.users)
      setResultado(mock1.users);
    }
  }

  return (
    <div id="main">
      <Header />
      <h2 id="buscador">Buscador de usuarios</h2>
      <Formulario query={query} setQuery={setQuery} callServer={callServer}></Formulario>
      <button id="botonall" className="new" onClick={() => callServer("all")}>
        Ver Todos
      </button>
      {error && <h1>Error: {error.description}</h1>}
      {resultado && <Resultados numitems={CONFIG.num_items} resultado={resultado} />}
    </div>
  );
}

export default App;