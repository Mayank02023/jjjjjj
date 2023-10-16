import React, { useEffect } from "react";
import { observer } from "mobx-react";
import UserListViewModel from "./UserListViewModel";
import UserListController from "./UserListController";

const UserListProvider = () => {
  const viewModel = UserListViewModel.getInstance();

  useEffect(() => {
    viewModel.loadUsers();
  }, []);

  return (
    <React.Fragment>
      <UserListController viemModel={viewModel} />
    </React.Fragment>
  );
};

export default observer(UserListProvider);
