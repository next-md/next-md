import colors from '../styles/colors'
import breakpoints from '../styles/breakpoints'
import elevations from '../styles/elevations'

export default `
  html, body, #__next, [data-reactroot] {
    height: 100%;
    margin: 0;

    color: ${colors.textBlack};
    font-family: Roboto, sans-serif;
  }

  .display4 {
    font-size: 112px;
    font-weight: 300;
    line-height: 112px;
  }
  .display3 {
    font-size: 56px;
    line-height: 56px;
  }
  .display2 {
    font-size: 45px;
    line-height: 48px;
  }
  .display1 {
    font-size: 34px;
    line-height: 40px;
  }
  .headline {
    font-size: 24px;
    line-height: 28px;
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
  }
  .subheading {
    font-size: 16px;
    line-height: 20px;
  }
  ${breakpoints.ml} {
    .subheading {
      font-size: 15px;
    }
  }
  .body2 {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  ${breakpoints.ml} {
    .subheading {
      font-size: 13px;
    }
  }
  .body1 {
    font-size: 14px;
    line-height: 20px;
  }
  ${breakpoints.ml} {
    .subheading {
      font-size: 13px;
    }
  }
  .caption {
    font-size: 12px;
    line-height: 16px;
  }


  .dp0 { ${elevations.dp0} }
  .dp2 { ${elevations.dp2} }
  .dp3 { ${elevations.dp3} }
  .dp4 { ${elevations.dp4} }
  .dp6 { ${elevations.dp6} }
  .dp8 { ${elevations.dp8} }
  .dp12 { ${elevations.dp12} }
  .dp16 { ${elevations.dp16} }
  .dp24 { ${elevations.dp24} }
`
