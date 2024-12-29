import { useState } from "react";

export const DerivedState = () => {
  // Create a hook for DerivedState
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
    { name: "Sole", age: 40 },
  ]);

  // Derived state: count of users
  const userCount = users.length;

  // Derived state: average age of users
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge.toFixed(2)}</p> {/* Rounded to 2 decimal places */}
    </div>
  );
};
