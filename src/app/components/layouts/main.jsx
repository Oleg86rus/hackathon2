import React from "react";
import {Container} from "react-bootstrap";
import UsersListPage from "../page/usersListPage";

const Main = () => {
  return (
    <Container>
      Main

      <h1>
        - Отобразить информацию о команде (минимум - просто текстовая информация)
        - Представить каждого участника команды (список с
        [карточками](https://www.notion.so/617b323ef4434c34b7906c9270015da2))
      </h1>

      <UsersListPage/>
    </Container>
  );
};

export default Main;
