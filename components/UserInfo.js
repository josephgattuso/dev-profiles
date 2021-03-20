import React from "react";
import PropTypes from "prop-types";
import Octicon, { Briefcase, Calendar, Location } from "@primer/octicons-react";
import { Section } from "../styles";

const UserInfo = ({ userData }) => (
  <Section dark>
    {userData && (
      <div>
        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name && <h1>{userData.name}</h1>}
      </div>
    )}
  </Section>
);

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfo;
