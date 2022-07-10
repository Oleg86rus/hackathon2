import { createSlice, createAction } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";

const initialState = {
  isLoading: false,
  error: null,
  dataLoaded: false,
  users: null,
  favorites: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.dataLoaded = true;
      state.users = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addFavoriteUser(state, action) {
      if (!Array.isArray(state.favorites)) {
        state.favorites = [];
      }
      const { id } = state.users.filter((u) => u._id === action.payload);
      state.users[id].bookmark = !state.users[id].bookmark;
      state.favorites.push(action.payload);
    },
    removeFavoriteUser(state, action) {
      state.favorites = state.favorites.filter((u) => u.id !== action.payload);
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const { fetching, fetchSuccess, fetchError } = actions;

export const loadUsersList = () => async (dispatch) => {
  dispatch(fetching());
  try {
    const content = await fetch("http://localhost:3004/users");
    const usersContent = await content.json();
    dispatch(fetchSuccess(usersContent));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

export const getStatus = (userId) => (state) => {
  console.log(userId);
  console.log(state);
  return state.users.users.map((user) => {
    console.log(userId);
    console.log(user.id);
    if (userId === user.id) {
      return { ...user, bookmark: !user.bookmark };
    }
    return user;
  });
};

export const getUsersList = () => (state) => state.users.users;

export const getDataStatus = () => (state) => state.users.dataLoaded;

export const getUsersLoadingStatus = () => (state) => state.users.isLoading;

export const getUserById = (userId) => (state) => {
  if (state.users.users) return state.users.users.find((u) => u.id === userId);
};

export const getFavoriteUsers = () => (state) => state.favorites;

export const pushIntoFavorites = (id) => async (dispatch) => {
  const content = await fetch("http://localhost:3004/users");
  const usersContent = await content.json();
  console.log(id);
  console.log(localStorageService.addBookmark(usersContent));
  // dispatch(addFav(1));
};

// export const removeOutOfFavorites = (id) => async (dispatch) => {
//   dispatch(removeFavoriteUser(id));
//   try {
//     localStorage.removeItem(USERS);
//     localStorage.setItem(USERS, state.favorites);
//   } catch (e) {
//     dispatch(fetchError(e.message));
//   }
// };

export default usersReducer;
