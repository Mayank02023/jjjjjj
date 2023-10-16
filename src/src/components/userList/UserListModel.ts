import axios from "axios";
import { makeAutoObservable } from "mobx";
import { User } from "../../models/User";

class UserListModel {
  userList: User[] = [
    {
      id: 1,
      name: "string",
      username: "string",
      email: "string"
    }
  ];

  private constructor() {
    makeAutoObservable(this);
  }

  static getInstance() {
    return new UserListModel();
  }

  loadUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        console.log(resp);
        this.userList = resp.data as User[];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getUsers(): User[] {
    return this.userList;
  }
}

export default UserListModel.getInstance();
