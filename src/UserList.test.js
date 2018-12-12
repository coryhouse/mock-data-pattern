import React from "react";
import UserList from "./UserList";
import { users } from "./mockData";
import renderer from "react-test-renderer";

it("renders user list with labels for admins", () => {
  const tree = renderer.create(<UserList users={users} />).toJSON();
  expect(tree).toMatchSnapshot();
});
