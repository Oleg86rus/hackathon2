import React from "react";
import { useSelector } from "react-redux";
// import pushIntoFavorites from "./";
import { getStatus } from "../../../store/usersSlice";
import "./bookmark.css";

const Bookmark = ({ userId, users }) => {
  console.log(userId);
  const getBookmark = useSelector(getStatus(userId));
  console.log(getBookmark);
  const status = getBookmark.findIndex((user) => userId === user.id);

  // const ToggleBookMark = (id) => {
  //   return users.map((user) => {
  //     if (user.id === id) {
  //       console.log(user);
  //       status = !status;
  //       console.log(user);
  //       return { ...user, bookmark: !user.bookmark };
  //     }
  //     return user;
  //   });
  // };
  // console.log(users[0].bookmark);
  // const status = () => {};
  return (
    <button
      className={"heart" + (!status ? " active" : "")}
      onClick={getBookmark}
    >
      <div className="heart-flip"></div>
    </button>
  );
};

export default Bookmark;
