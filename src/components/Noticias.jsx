import { Card, Form, Row, Col } from "react-bootstrap";
import RowCards from "./RowCards";
import { useState, useEffect } from "react";

const Noticias = () => {
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, [paisSeleccionado, categoriaSeleccionada]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_240135ddcbf2e44d1a628028e9bb6a82d03a4&country=${paisSeleccionado}&category=${categoriaSeleccionada}`
      );
      const informacion = await respuesta.json();
      setNoticias(informacion.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="mt-4 shadow">
        <Card.Header className="pt-3">
          <Form>
            <Form.Group as={Row} className="mb-3 justify-content-start">
              <Form.Label column sm="2" md="4">
                País:
              </Form.Label>
              <Col sm="10" md="6" className="px-2 px-md-4">
                <Form.Select
                  aria-label="países"
                  onChange={(e) => {
                    setPaisSeleccionado(e.target.value);
                  }}
                >
                  <option value="">Selecciona un país</option>
                  <option value="ar">Argentina</option>
                  <option value="us">Estados Unidos</option>
                  <option value="gb">Reino Unido</option>
                  {/* Agrega más opciones de países según tu necesidad */}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify-content-start">
              <Form.Label column sm="2" md="4">
                Categoría:
              </Form.Label>
              <Col sm="10" md="6" className="px-2 px-md-4">
                <Form.Select
                  aria-label="categorías"
                  onChange={(e) => {
                    setCategoriaSeleccionada(e.target.value);
                  }}
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="science">Ciencia</option>
                  <option value="sports">Deportes</option>
                  <option value="business">Negocios</option>
                  {/* Agrega más opciones de categorías según tu necesidad */}
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Card.Header>
        <Card.Body>
          <RowCards noticiasFiltradas={noticiasFiltradas} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Noticias;
