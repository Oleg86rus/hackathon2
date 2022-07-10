import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import Badges from "../common/badges/badges";
import Bookmark from "../common/bookmark/bookmark";
import { useSelector } from "react-redux";
import { getUsersList } from "../../store/users";

const UsersListPage = () => {
  const users = useSelector(getUsersList());
  const status = true;
  if (users === null) {
    return "...loading";
  } else {
    return (
      <div className="cards-wrapper">
        {users.map((user) => (
          <Card key={user.id} className="h-100 border-orange">
            <div className="card-image">
              <Card.Img variant="top" src={user.img} />
            </div>

            <Card.Body className="text-body">
              <Badges userId={user.id} />
              <Card.Title className="mt-2">
                {user.name} {user.surname}
              </Card.Title>
              <Card.Text className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis officia aperiam sequi tenetur iure eaque rem
                repellendus impedit quasi quas possimus, enim, nam expedita
                error, incidunt deleniti praesentium cumque corporis!
              </Card.Text>
              <NavLink className="btn btn-orange" to={`/user/${user.id}`}>
                Открыть
              </NavLink>
            </Card.Body>
            <Bookmark status={status} userId={user.id} users={users}/>
          </Card>
        ))}
      </div>
    );
  }
};

export default UsersListPage;
