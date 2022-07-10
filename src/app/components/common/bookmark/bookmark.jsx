import React from "react";
import { useSelector } from "react-redux";
import { getStatus } from "../../../store/usersSlice";
import "./bookmark.css";

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
