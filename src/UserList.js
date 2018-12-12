import React from "react";

const UserList = ({ users }) => (
  <>
    <h2>Users</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} {user.role === "Admin" && " - Admin"}
        </li>
      ))}
    </ul>
  </>
);

export default UserList;
