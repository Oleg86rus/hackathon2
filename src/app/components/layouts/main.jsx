import React from "react";
import { Container } from "react-bootstrap";
import TextAnimation from "../common/textAnimation/textAnimation";
import Users from "./users";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../store/usersSlice";
import Loading from "../ui/loading";
import Wave from "../common/vawe/wave";

const Main = () => {
  const data = useSelector(getDataStatus());
  return (
    <>
      <Container>
        {data ? (
          <div className="main-wrapper">
            <TextAnimation text={"Добро пожаловать!"}/>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              dicta delectus quod voluptate quia corrupti accusamus, perferendis
              totam id nisi ipsum maiores sed repellendus unde, dolor maxime
              possimus veniam quisquam!
            </p>
            <Users/>
          </div>
        ) : <Loading/>}
      </Container>
    </>
  );
};

export default Main;
