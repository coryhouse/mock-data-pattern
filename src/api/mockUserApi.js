import { users } from "../mockData";

// Async to simulate an API call.
export async function getUsers() {
  return await users;
}
