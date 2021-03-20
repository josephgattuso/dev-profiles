import styled from "styled-components";
import { theme, mixins, media } from "../../styles";
const { colors, fonts } = theme;

const ReposStyles = styled.div`
  .dropdown-wrapper {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${colors.grey};

    .label {
      margin: 0 1rem;
    }
  }
  .repo-list {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;

      li {
        .repo {
          ${mixins.flexBetween};
          flex-direction: column;
          padding: 2rem;
          height: 100%;
          color: ${colors.grey2};
          background-color: ${colors.white};
          border-radius: 0.25rem;
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
          transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
          ${media.bp600`
            padding: 1.5rem;
          `};

          &:hover,
          &:focus {
            box-shadow: 0 8px 20px -15px rgba(0, 0, 0, 0.2);
          }

          h3 {
            ${mixins.ellipsis};
            color: ${colors.darkGrey};
            font-family: ${fonts.mono};
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.5px;
            margin-bottom: 0.75rem;
          }

          p {
            font-size: 14px;
            margin-bottom: 2rem;
          }

          &__header {
            margin-bottom: 2rem;
          }

          &__name {
            display: flex;
            align-items: center;
            svg {
              margin-right: 0.5rem;
              min-width: 16px;
            }
            h3 {
              margin: 0;
            }
          }

          &__stats {
            ${mixins.flexBetween};
            color: ${colors.grey};
            font-size: 13px;

            &--left {
              display: flex;
              flex-grow: 1;

              span {
                display: flex;
                align-items: center;
                margin-right: 0.75rem;
                svg {
                  margin-right: 0.25rem;
                }
                .language {
                  background: blue;
                  border-radius: 100%;
                  margin-right: 0.25rem;
                  height: 10px;
                  width: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ReposStyles;
