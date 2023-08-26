import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Lista from "./components/lista/lista";
import CONFIG from "./config/config";
import SearchPage from './components/searchPage/searchPage';
import { mockdata } from "./constants/products.js";

const USE_SERVER = CONFIG.use_server;

function App() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState(null);
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
          setProducts(data);
          setError(null);
        }
      } catch (error) {
        setProducts({ error: { description: error.message } });
      }
    } else {
      setProducts(mockdata);
    }
  }

  return (
    <div className="App">
      <Header image={logo} />
      <SearchPage theproducts={products} callServer={callServer} />
      <div id="productosresultados">
        {products && <Lista productos={products.products} numitems={CONFIG.num_items} />}
      </div>
    </div>
  );
}

export default App;
