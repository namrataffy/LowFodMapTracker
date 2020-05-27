import axios from "axios";

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets all foods
  getFoods: function () {
    return axios.get("/api/food");
  },
};
