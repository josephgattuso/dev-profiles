import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  RepoIcon,
  StarIcon,
  RepoForkedIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";
import FlipMove from "react-flip-move";
import { langColors } from "../utils";
import ReposStyles from "./styles/RepoStyles";
import DropdownStyles from "./styles/DropdownStyles";
import { Section } from "../styles";

const Repos = ({ repoData }) => {
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState("stars");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getTopRepos = (type) => {
    const LIMIT = 12;
    const map = {
      stars: "stargazers_count",
      forks: "forks_count",
      size: "size",
    };
    const sortProperty = map[type];
    const sorted = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);

    setTopRepos(sorted);
  };

  useEffect(() => {
    if (repoData.length) {
      getTopRepos();
    }
  }, []);

  useEffect(() => getTopRepos(sortType), [sortType]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = (sortType) => {
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ["stars", "forks", "size"];

  return (
    <Section>
      <ReposStyles>
        <header>
          <h2>Top Repos</h2>
          <div className="dropdown-wrapper">
            <span className="label">by</span>
            <DropdownStyles active={dropdownOpen}>
              <button
                className="dropdown__button"
                onClick={() => toggleDropdown()}
              >
                <label>{sortType}</label>
                <TriangleDownIcon />
              </button>
              <ul className="dropdown__list">
                {sortTypes.map((type, i) => (
                  <li className="dropdown__list-item" key={i}>
                    <button onClick={() => changeRepoSort(type)}>{type}</button>
                  </li>
                ))}
              </ul>
            </DropdownStyles>
          </div>
        </header>

        <div className="repo-list">
          {topRepos.length > 0 ? (
            <FlipMove typeName="ul">
              {topRepos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo"
                  >
                    <div className="repo__top">
                      <div className="repo__name">
                        <RepoIcon />
                        <h3>{repo.name}</h3>
                      </div>
                      <p>{repo.description}</p>
                    </div>
                    <div className="repo__stats">
                      <div className="repo__stats--left">
                        <span>{repo.language}</span>
                        <span>
                          <StarIcon />
                          {repo.stargazers_count.toLocaleString()}
                        </span>
                        <span>
                          <RepoForkedIcon />
                          {repo.forks.toLocaleString()}
                        </span>
                      </div>
                      <div className="repo__stats--right">
                        <span>{repo.size.toLocaleString()} KB</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </FlipMove>
          ) : (
            <p>No available repositories!</p>
          )}
        </div>
      </ReposStyles>
    </Section>
  );
};

Repos.propTypes = {
  repoData: PropTypes.array.isRequired,
};

export default Repos;
