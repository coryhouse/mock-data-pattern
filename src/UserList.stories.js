import React from "react";
import { storiesOf } from "@storybook/react";
import UserList from "./UserList";
import { users } from "./mockData";

storiesOf("UserList", module)
  .add("default", () => <UserList users={users} />)
  .add("with empty list", () => <UserList />);
