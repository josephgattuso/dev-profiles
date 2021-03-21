import styled from "styled-components";
import { theme, mixins, media } from "../../styles";
const { colors } = theme;

const ChartStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  margin-top: -8rem !important;
  max-width: 1200px !important;
  ${media.bp900`
    justify-items: center;
  `};

  .chart {
    background: ${colors.white};
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    padding: 2rem;
    ${media.bp400`
      padding: 2rem 1rem;
    `};

    header {
      ${mixins.flexBetween};
      h2 {
        font-size: 1.5rem;
      }
    }
    p {
      color: ${colors.grey2};
    }
  }
`;

export default ChartStyles;
