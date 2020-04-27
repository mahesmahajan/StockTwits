import React from "react";
import "./App.css";
import { SearchView } from "./components/views/Search";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container className="App">
      <Row className="App-header">
        <SearchView />
      </Row>
    </Container>
  );
}

export default App;
