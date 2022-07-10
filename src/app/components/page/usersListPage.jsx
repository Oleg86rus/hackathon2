import React from "react";
import Card from "react-bootstrap/Card";
import Badges from "../common/badges/badges";
import Bookmark from "../common/bookmark/bookmark";
import { useSelector } from "react-redux";
import { getUsersList } from "../../store/usersSlice";
import { Container } from "react-bootstrap";
import Loading from "../ui/loading";
import OpenUserCard from "../common/openUserCard";
import Wave from "../common/vawe/wave";

const UsersListPage = () => {
  const users = useSelector(getUsersList());

  return (
    <>
      <Container>
        {!users ? <Loading/>
          : (<div className="cards-wrapper">
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
                  <OpenUserCard user={user}/>
                </Card.Body>
                <Bookmark status={status} userId={user.id} users={users}/>
              </Card>
            ))}
          </div>)}
      </Container>
    </>
  );
};

export default UsersListPage;