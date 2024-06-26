import React, { useEffect, useState, useRef } from "react";
import Loading from "../components/Loading";
import UsersContainer from "../components/UsersContainer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef("");
  let EndPoint = "https://api.github.com";

  async function AllUsers() {
    setLoading(true);
    const res = await fetch(`${EndPoint}/users`);
    const data = await res.json();
    setUsers(data);
    setLoading(null);
  }

  async function FindUser() {
    setLoading(true);
    if (user.current.value !== "") {
      setUsers([]);
      const res = await fetch(`${EndPoint}/search/users?q=${user.current.value}`);
      const data = await res.json();
      setUsers(data.items);
      user.current.value = "";
    } else {
      AllUsers();
    }
    setLoading(null);
  }

  useEffect(() => {
    AllUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-center h-11 my-5 items-center">
        <input
          placeholder="Search GitHub username"
          ref={user}
          type="text"
          className="h-full md:w-1/3 outline-none text-gray-800 px-2 
          font-semibold text-lg w-2/3 bg-gradient-to-r from-blue-300 to-pink-300"
        />
        <button
          onClick={FindUser}
          className="bg-blue-400 font-semibold px-4 h-full font-[Poppins]"
        >
          Search
        </button>
      </div>
      <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>
    </div>
  );
};

export default Users;


