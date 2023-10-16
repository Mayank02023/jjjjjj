import { User } from "../../models/User";
import userListModel from "./UserListModel";

class UserListViewModel {
  private constructor(dependencies: any) {
    Object.assign(this, dependencies);
  }

  static getInstance() {
    const dependencies = {
      userListModel
    };

    return new UserListViewModel(dependencies);
  }

  loadUsers() {
    //@ts-ignore
    this.userListModel.loadUsers();
  }

  getUsers(): User[] {
    //@ts-ignore
    return this.userListModel.getUsers();
  }
}

export default UserListViewModel;
