import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../store/usersSlice";
import Loading from "../ui/loading";
import { Card } from "react-bootstrap";
import Badges from "./badges/badge";
import OpenUserCard from "./openUserCard";
import Bookmark from "./bookmark/bookmark";

const RenderingUsers = ({ usersList }) => {
  const data = useSelector(getDataStatus());
  return (
    <>
      {!data ? <Loading/> : (usersList.map((user) => (
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
          <Bookmark userId={user.id}/>
        </Card>
      )))}
    </>);
};
export default RenderingUsers;