import * as React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup
} from "react-bootstrap";
import axios from "axios";
import { ResultsView } from "./Results";

export const SearchView = () => {
  //State Management: Variables and Functions
  const [title, setTitle] = React.useState("");
  const [responseData, setResponseData] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [count, setCount] = React.useState(3);
  const proxy = "/api";

  //API GET Promise
  const handleSubmit = async event => {
    console.log(event);
    event.preventDefault();
    clearInterval();
    await axios
      .post(proxy, { title })
      .then(function(response) {
        setErrorMessage(false);
        setResponseData(response.data);
        console.log(response.data, responseData, title);
        // refreshTweets(title);
      })
      .catch(function(error) {
        setErrorMessage(true);
        console.log(
          error.response && error.response.data
            ? error.response.data
            : "Unspecified Error"
        );
      })
      .finally(function() {});
  };

  function clearFields() {
    setResponseData(null);
  }

  
  return (
    <Container>
      <Row>
        <Col>
          <Form id="form-form" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Stock Twitt</Form.Label>
              <Form.Control
                id="form-control"
                type="text"
                placeholder="eg: AAPL, MSFT, etc..."
                onChange={event => setTitle(event.target.value)}
              />
              <Form.Text className="text-muted">
                {responseData && responseData.messages
                  ? "Please refresh using the button below to get the most recent tweets for your search."
                  : "Please search without using a $ symbol."}
              </Form.Text>
            </Form.Group>

            {responseData && responseData.messages ? (
              <Button variant="outline-primary" type="submit">
                Refresh Search
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </Form>
        </Col>
      </Row>
      {errorMessage ? (
        <Row style={{ marginTop: "20px" }} className="alert alert-danger">
          There was an error on your submission, please try again.
        </Row>
      ) : null}
      {responseData && responseData.messages ? (
        <Card style={{ marginTop: "20px", paddingTop: "20px" }}>
          <Card.Title style={{ color: "green" }}>
            {`$${responseData.symbol.symbol}: ${responseData.symbol.title}  Showing ${count}/30 Tweets`}
            <Row>
              <Col md={3} />
              <Col md={6}>
                <Form.Control
                  placeholder="eg: 0, 1 etc..."
                  id="form-control"
                  type="number"
                  min="0"
                  max="30"
                  onChange={event => setCount(event.target.value)}
                />
                <Form.Text className="text-muted">
                  Default Number of Tweets are 3. You can adjust it as per your persona
                </Form.Text>
              </Col>
              <Col md={3} />
            </Row>
            {console.log(responseData)}
          </Card.Title>

          <hr />
          <Card.Body>
            <ResultsView data={responseData} count={count} />
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-success" onClick={() => clearFields()}>
              Close {responseData.symbol.title}
            </Button>
          </Card.Footer>
        </Card>
      ) : null}
    </Container>
  );
};
