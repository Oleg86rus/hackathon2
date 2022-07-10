import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersList,
  pushIntoFavorites,
  removeOutOfFavorites,
} from "../../../store/usersSlice";

const Bookmark = ({ userId }) => {
  const dispatch = useDispatch();
  const addUserToFavorite = useSelector(pushIntoFavorites());
  const deleteUserFromFavorite = useSelector(removeOutOfFavorites());
 
  return (
    <button
      className={"heart" + (status ? " active" : "")}
      onClick={status ? dispatch(deleteUserFromFavorite(userId)) : dispatch(addUserToFavorite(userId))}
    >
      <div className="heart-flip"></div>
    </button>
  );
};

export default Bookmark;
