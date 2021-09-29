import React from "react";
// add any needed imports here
import { useSelector } from "react-redux"

function Users() {
  const usersList = useSelector((state) => state.users.map((u) => <li key={u.username}>{u.username}</li>))

  const totalUsers = useSelector((state) => state.users.length)

  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {usersList}
        {/* In addition, display the total number of users curently in the store */}
        <div>Total Users: {totalUsers}</div>
      </ul>
    </div>
  );
}

export default Users;
