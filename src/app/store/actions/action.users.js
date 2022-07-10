import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3004/users/");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};