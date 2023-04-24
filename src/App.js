import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Inicio from "./pages/Inicio";
import Sobremim from "./pages/Sobremim";
import Projetos from "./pages/Projetos";
import Competencias from "./pages/Competencias";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      <Inicio />
      <Sobremim />
      <Projetos />
      <Competencias />
    </div>
  );
}

export default App;
