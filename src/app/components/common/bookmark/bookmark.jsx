import React from "react";

const Bookmark = ({ status, userId, users }) => {
  
  const ToggleBookMark = (id) => {
    users.map((user) => {
      if (user.id === id) {
        return { ...user, bookmark: !user.bookmark };
      }
      return user;
    });
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
