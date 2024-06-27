import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const EndPoint = 'https://api.github.com/users';

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${EndPoint}/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching GitHub user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto p-6 mt-6 mb-6 bg-gray-400 shadow-lg shadow-gray-600 rounded-md">
      <img className="w-24 h-24 rounded-full mb-4" src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">{user.login}</h1>
        {user.name && <p className="text-lg text-gray-700 mb-1 font-serif">{user.name}</p>}
        {user.location && <p className="text-gray-700 mb-4 font-serif">{user.location}</p>}
        <p className="text-black">Followers: {user.followers}</p>
        <p className="text-black">Following: {user.following}</p>
        <p className="text-black">Public Repos: {user.public_repos}</p>
      </div>
      <div className="mt-6">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          View GitHub Profile
        </a>
        {user.linkedin_username && (
          <div>
          LinkedIn Username: {user.linkedin_username}
       
          <a
            href={`https://www.linkedin.com/in/${user.linkedin_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
          >
            View LinkedIn Profile
          </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

//http://localhost:8001/user/faiza:userprofile github
//npm i react-router-dom@v6