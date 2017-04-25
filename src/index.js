// NOTE Was having trouble with export {default as ...} syntax
module.exports = {
  // components
  Ripples: require('./components/Ripples').default,
  IconToggle: require('./components/IconToggle').default,
  Divider: require('./components/Divider').default,
  RaisedButton: require('./components/RaisedButton').default,
  FlatButton: require('./components/FlatButton').default,

  // styles
  animations: require('./styles/animations').default,
  breakpoints: require('./styles/breakpoints').default,
  colors: require('./styles/colors').default,
  elevations: require('./styles/elevations').default,
  g: require('./styles/g').default,

  // themes
  themeLight: require('./themes/light').default,
}
