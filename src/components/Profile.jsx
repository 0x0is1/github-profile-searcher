import React from 'react'

const Profile = ({profile}) => {
  return (
    <div className="profile">
        {profile ? (
          <div className="profile_card">
            <img src={profile.avatar_url} alt="user avatar" />
            <h1 className="name">{profile.name}</h1>
            <h1 className="username">@{profile.login}</h1>
            <h3 className='bio'>{profile.bio}</h3>
            <div className="pstats">
              <h3>Repositories: {profile.public_repos}</h3>
              <h3>Followers: {profile.followers}</h3>
              <h3>Following: {profile.following}</h3>
            </div>
            <h3>
              Joined on: {new Date(profile.created_at).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
            </h3>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
  )
}

export default Profile