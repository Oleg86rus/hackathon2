import React from "react";
import UsersListPage from "../page/usersListPage";
import {useParams} from "react-router-dom";
import UserPage from "../page/userPage";

const Users = () => {
  const params = useParams();
  const {userId} = params;

  console.log("params", params);

  return (
    <>
      {userId
        ? <UsersListPage/>
        : <UserPage userId={userId}/>
      }
    </>
  );
};

export default Users;
