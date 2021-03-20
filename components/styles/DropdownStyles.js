import styled, { css } from "styled-components";
import { theme, mixins } from "../../styles";
const { colors } = theme;

const DropdownStyles = styled.div`
  position: relative;
  width: 100px;
  font-size: 14px;
  font-weight: 500;

  .dropdown__button {
    ${mixins.flexBetween};
    align-items: center;
    background: transparent;
    border-radius: 5px;
    border: 1px solid rgba(0, 118, 255, 0.1);
    color: ${colors.blue};
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    padding: 10px 7px;
    text-align: left;
    width: 100%;

    &:hover,
    &:focus {
      background: rgba(0, 118, 255, 0.1);
      border-color: rgba(0, 118, 255, 0.1);
      color: ${colors.blue};
    }
    svg {
      margin-left: 0.5rem;
    }
    label {
      transition: ${theme.transition};
      cursor: pointer;
    }
  }
  .dropdown__list {
    background-color: ${colors.offWhite};
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    overflow: hidden;
    position: absolute;
    transition: ${theme.transition};
    visibility: hidden;
    width: 100%;
    z-index: 2;
  }
  .dropdown__list-item {
    border-radius: 0;
    transition: ${theme.transition};
    &:hover,
    &:focus {
      background: ${colors.lightestBlue};
    }
    &:first-of-type {
      button {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &:last-of-type {
      button {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    button {
      background: rgba(0, 118, 255, 0.1);
      color: ${colors.blue};
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      padding: 10px 7px;
      text-align: left;
      width: 100%;
    }
  }
  ${(props) =>
    props.active &&
    css`
      .dropdown__list {
        opacity: 1;
        visibility: visible;
      }
      .dropdown__button {
        background: rgba(0, 118, 255, 0.1);
        svg {
          transform: rotate(0.5turn);
        }
      }
    `}
`;

export default DropdownStyles;
