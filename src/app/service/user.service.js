import httpService from "./http.service";

const userEndPoint = "users/";

const userService = {
  get: async () => {
    const { data } = await fetch("http://localhost:3004/" + userEndPoint).then(res=>res.json()).then(res=>res);
    console.log(data);
    return data;
  },
  // create: async (payload) => {
  //   const {data} = await httpService.put(userEndPoint+payload._id, payload);
  //   return data;
  // },
  // getCurrentUser: async () => {
  //   const {data} = await httpService.get(
  //     userEndPoint + localStorageService.getUserId()
  //   );
  //   return data;
  // },
  // update: async (payload) => {
  //   const { data } = await httpService.patch(
  //     userEndPoint + localStorageService.getUserId(),
  //     payload
  //   );
  //   return data;
  // }
};

export default userService;