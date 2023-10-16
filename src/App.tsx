import "./styles.css";
import React from "react";
import UserListProvider from "./src/components/userList/UserListProvider";

export default function App() {
  return (
    <React.Fragment>
      <UserListProvider />
    </React.Fragment>
  );
}
