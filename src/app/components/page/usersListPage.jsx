import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";

const UsersListPage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  console.log("user", user);
  if (user === undefined) {
    return "...loading";
  } else {
    return (
      <Container>
        <Row xs={5} md={5} className="g-4">
          {user.map(user => (
            <Col key={user.id}>
              <NavLink to={`/user/${user.id}`}>
                <Card>
                  <Card.Img variant="top" src={user.img}/>
                  <Card.Body>
                    <Card.Title>
                      {user.name}
                    </Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default UsersListPage;
