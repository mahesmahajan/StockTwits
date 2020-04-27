import * as React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

export const ResultsView = props => {
  const size = props.count;
  return (
    <Container>
      <Row>
        {props.data && props.data.messages
          ? props.data.messages.slice(0, size).map((tweet, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="elements">
                <Card style={{ marginBottom: "20px" }} bg="secondary">
                  <Card.Body>
                    <Card.Title>{tweet.created_at}</Card.Title>
                    <Card.Text>{tweet.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};
