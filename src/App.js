import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  let saludo = "Venta de Productos Natura";

  return (
    <div className="App">
      <NavBar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
