import React from "react";
import { Container } from "react-bootstrap";
import TextAnimation from "../common/textAnimation/textAnimation";
import Wave from "../common/vawe/wave";
import UsersListPage from "../page/usersListPage";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Container>
        <TextAnimation text={"Добро пожаловать!"} />

        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dicta delectus quod voluptate quia corrupti accusamus, perferendis
          totam id nisi ipsum maiores sed repellendus unde, dolor maxime
          possimus veniam quisquam!
        </p>

        <UsersListPage />
      </Container>
      <div
        class="RadialProgress"
        role="progressbar"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >25%</div>
      <Wave />
    </div>
  );
};

export default Main;
