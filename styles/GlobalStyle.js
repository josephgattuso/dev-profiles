import { createGlobalStyle } from "styled-components";
import theme from "./theme";
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-BlackItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Bold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraLightBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraLightBETA.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-SemiBoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ThinBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ThinBETA.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-BoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraBold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-LightItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-LightItalicBETA.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Italic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ThinItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ThinItalicBETA.woff') format('woff');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraBoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-LightBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-LightBETA.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Black.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-SemiBold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraLightItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraLightItalicBETA.woff') format('woff');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

::selection {
  background: ${colors.blue};
  color: ${colors.white};
}

body {
  background: ${colors.offWhite};
  color: ${colors.darkGrey};
  font-family: ${fonts.inter};
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyle;
