import React from "react";
import PropTypes from "prop-types";
import {
  BriefcaseIcon,
  CalendarIcon,
  LocationIcon,
} from "@primer/octicons-react";
import StyledUserInfo from "./styles/UserInfoStyles";

import { Section } from "../styles";

const UserInfo = ({ userData }) => (
  <Section dark>
    {userData && (
      <StyledUserInfo>
        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}
        {userData.name && <h1>{userData.name}</h1>}
        {userData.login && (
          <h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{userData.login}
            </a>
          </h2>
        )}
        <div className="info">
          {userData.company && (
            <span className="info__item">
              <BriefcaseIcon size="small" />
              {userData.company}
            </span>
          )}
          {userData.location && (
            <span className="info__item">
              <LocationIcon size="small" />
              {userData.location}
            </span>
          )}
          {userData.created_at && (
            <span className="info__item">
              <CalendarIcon size="small" />
              Joined{" "}
              {new Date(userData.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>
        <div className="stats">
          <div className="stats__item">
            <span className="num">
              {userData.public_repos.toLocaleString()}
            </span>
            <span className="num-label">Repositories</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.followers.toLocaleString()}</span>
            <span className="num-label">Followers</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.following.toLocaleString()}</span>
            <span className="num-label">Following</span>
          </div>
        </div>
      </StyledUserInfo>
    )}
  </Section>
);

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfo;
