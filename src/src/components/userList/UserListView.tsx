import React from "react";
import { observer } from "mobx-react";
import { User } from "../../models/User";

const UserListView = ({ users }: { users: User[] }) => {
  return (
    <React.Fragment>
      <div>
        <div>
          {users.map((x) => (
            <div>{x.name}</div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default observer(UserListView);
