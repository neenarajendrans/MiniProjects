import { useState, useEffect } from "react";
import axios from "axios";

function UserCard({ name, email }) {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", textAlign: "center" }}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

function CounterWithUser() {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage(null);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => {
        setUserData(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Could not fetch user details.");
        setIsLoading(false);
      });
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Dynamic User Fetcher</h1>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>Decrease</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      
      {isLoading && <p>Loading user...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {userData && <UserCard name={userData.name} email={userData.email} />}
    </div>
  );
}

export default CounterWithUser;
