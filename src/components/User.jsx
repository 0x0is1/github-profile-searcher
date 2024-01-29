import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Repos from './Repos'
import Profile from './Profile';

function User() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  const { username } = useParams();

  const fetchProfile = async (uname) => {
    try {
      var url = `https://api.github.com/users/${uname}`;
      var response = await fetch(url);
      var data = await response.json();
      setProfile(data);
      url = `https://api.github.com/users/${uname}/repos`;
      response = await fetch(url);
      data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    fetchProfile(username);
  }, [username]);

  return (
    <div className="interface">
      <Profile profile={profile}/>
      <Repos obj={repos}/>
    </div>
  );
}

export default User;
