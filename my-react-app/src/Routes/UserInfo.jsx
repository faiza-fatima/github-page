import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Events from "../components/Events";
import Loading from "../components/Loading";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UsersContainer from "../components/UsersContainer";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const EndPoint = "https://api.github.com/users";
  const { pathname } = useLocation();

  async function fetchUserInfo(username) {
    setLoading(true);
    try {
      const response = await fetch(`${EndPoint}/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUser([data]);
        setUsers([]); // Clear previous search results
      } else {
        console.error('Failed to fetch GitHub user');
      }
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchUrls(username) {
    setLoading(true);
    try {
      const response = await fetch(`${EndPoint}/${username}/${type}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch GitHub user data');
      }
    } catch (error) {
      console.error('Error fetching GitHub user data:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/${searchQuery}`);
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      const username = pathname.substring(1);
      fetchUserInfo(username);
      fetchUrls(username);
    }
  }, [pathname, type]); // Fetch data when pathname or type changes

  return (
    <div className="py-5">
      <div className="flex justify-center h-11  my-5 items-center">
        <input
          placeholder="Search GitHub username"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-full md:w-1/3 outline-none text-gray-800 px-2 
          font-semibold text-lg w-2/3 bg-gradient-to-r from-blue-300 to-pink-300"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-400  font-semibold  px-4 h-full font-[Poppins]"
        >
          Search
        </button>
      </div>

      {loading && <Loading />}

      {user.length > 0 && (
        <div className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10">
          {user.map((uinfo, i) => (
            <div key={i} className="flex">
              <img
                src={uinfo.avatar_url}
                className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
                alt="User Avatar"
              />
              <div className="text-lg leading-10 px-3">
                <h1 className="text-3xl pb-4">{uinfo.name}</h1>
                <h1>
                  <span className="text-teal-400">Login_name</span> :{uinfo.login}
                </h1>
                <h1>
                  <span className="text-teal-400">followers : </span>
                  {uinfo.followers}
                </h1>
                <h1>
                  <span className="text-teal-400">following : </span>
                  {uinfo.following}
                </h1>
                <h1>
                  <span className="text-teal-400">public_repositories : </span>
                  {uinfo.public_repos}
                </h1>
                <h1>
                  <span className="text-teal-400">Join : </span>
                  {new Date(uinfo.created_at).toLocaleDateString()}
                </h1>
                <a
                  href={uinfo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 
                  font-semibold rounded cursor-pointer  px-4 py-1 bg-teal-600 my-3 tracking-wide"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl ">
        <Tabs type={type} setType={setType} />
      </div>

      {type === "repos" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {users && <Repo users={users} />}
        </div>
      )}

      {type === "received_events" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {users && <Events data={users} />}
        </div>
      )}

      {type === "followers" && (
        <div className="w-full mx-auto">
          {users && <UsersContainer users={users} />}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
