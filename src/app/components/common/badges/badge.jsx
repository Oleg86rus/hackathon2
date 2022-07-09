import React from "react";
import { Badge } from "react-bootstrap";

const Badges = ({ userId, users }) => {
  const badges = [
    {
      id: "css",
      name: "Css",
      color: "success",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      color: "primary",
    },
    {
      id: "react",
      name: "React",
      color: "warning",
    },
    {
      id: "html",
      name: "Html",
      color: "dark",
    },
    {
      id: "javascript",
      name: "javascript",
      color: "success",
    },
    {
      id: "webpack",
      name: "webpack",
      color: "primary",
    },
    {
      id: "redux",
      name: "redux",
      color: "warning",
    },
    {
      id: "firebase",
      name: "firebase",
      color: "dark",
    },
  ];
  return badges.map((badge) => (
    <Badge className="me-2" key={badge.id} bg={badge.color}>
      {badge.name}
    </Badge>
  ));
};

export default Badges;
