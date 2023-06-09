import { Container } from "react-bootstrap";
import "./App.css";
import Noticias from "./components/Noticias";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Container className="py-3 px-md-5 main">
        <Titulo></Titulo>
        <Noticias></Noticias>
      </Container>
      <footer className="py-4 bg-black text-light text-center">
        &copy; Todos los derechos reservados 2023.
      </footer>
    </>
  );
}

export default App;