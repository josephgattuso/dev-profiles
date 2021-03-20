import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  RepoIcon,
  StarIcon,
  RepoForkedIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";
import FlipMove from "react-flip-move";
import RepoStyles from "./styles/RepoStyles";
import { Section } from "../styles";

const Repos = ({ repoData }) => {
  const [topRepos, setTopRepos] = useState({});
  const [sortType, setSortType] = useState({});
  const [dropdownOpen, setDropdownopen] = useState({});

  return (
    <Section>
      <RepoStyles>
        <header>
          <h2>Top Repos</h2>
        </header>
        <div className="repo-list">{/* Todo */}</div>
      </RepoStyles>
    </Section>
  );
};

Repos.propTypes = {
  repoData: PropTypes.array.isRequired,
};

export default Repos;
