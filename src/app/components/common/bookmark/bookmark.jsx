import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmark } from "../../../store/usersSlice";

const Bookmark = ({ userId, users }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const ToggleBookMark = (id) => {
    console.log(id);
    setStatus(!status);
    const user = users.filter((user) => {
      if (user.id === id) {
        return ({ ...user, bookmark: !user.bookmark});
      }
    }
    );
    console.log(user);
    dispatch(getBookmark(user));
  };

  return (
    <button
      className={"heart" + (status ? " active" : "")}
      onClick={() => ToggleBookMark(userId)}
    >
      <div className="heart-flip"></div>
    </button>
  );
};

export default Bookmark;
