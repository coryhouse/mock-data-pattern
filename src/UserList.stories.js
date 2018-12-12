import React from "react";
import { storiesOf } from "@storybook/react";
import UserList from "./UserList";
import { users } from "./mockData";

storiesOf("UserList", module)
  .add("with populated list", () => <UserList users={users} />)
  .add("with empty list", () => <UserList />);
