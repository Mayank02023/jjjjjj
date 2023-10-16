import React from "react";
import UserListView from "./UserListView";
import UserListViewModel from "./UserListViewModel";

const UserListController = ({
  viemModel
}: {
  viemModel: UserListViewModel;
}) => {
  return (
    <React.Fragment>
      <UserListView users={viemModel.getUsers()} />
    </React.Fragment>
  );
};

export default UserListController;
