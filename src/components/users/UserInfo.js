import React from 'react';

export default function UserInfo({ userData }) {
  const {
    avatar_url,
    location,
    followers,
    name,
    bio,
    company,
    email,
    following,
    public_repos,
  } = userData;
  return (
    <div classNameName="container">
      {/* <div classNameName="row">
      <div classNameName="col-lg-4">
      </div>
      </div> */}
      <div className="card mb-3 mr-2">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={avatar_url} className="card-img" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Name: </strong>
                {name}
              </h5>
              <p className="card-text">
                <strong>Bio: </strong>
                {bio}
              </p>
              <p className="card-text">
                <i class="fas fa-briefcase " /> : {company}
              </p>
              <p className="card-text">
                <i class="fas fa-code " /> : {public_repos}
              </p>
              <p className="card-text">
                <i class="fas fa-users " /> : {followers}
              </p>

              <p className="card-text">
                <i class="fas fa-map-marker " /> : {location}
              </p>
              <p className="card-test">
                <i class="fas fa-envelope-square" /> :{email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
