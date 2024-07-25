import axios from "axios";
const USERS_API_BASE_URL = "http://localhost:8090/api/v1/users/";
const USER_API_UDAPTE = "http://localhost:8090/api/v1/add/";
const cors = require("cors");
// App.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// this microservices are responsible to Exchange requests with Frond-back / end Relation

class UsersService {
  getUsers() {
    return axios.get(USERS_API_BASE_URL);
  }

  createUser(user) {
    return axios.post(USER_API_UDAPTE, user);
  }
}

export default new UsersService();
