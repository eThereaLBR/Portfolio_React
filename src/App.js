import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Inicio from "./pages/Inicio";
import Sobremim from "./pages/Sobremim";
import Linguagens from "./pages/Linguagens";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      <Inicio />
      <Sobremim />
      <Linguagens />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
