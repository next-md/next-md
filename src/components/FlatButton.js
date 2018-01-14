import React from 'react'
import PropTypes from 'prop-types'

import Ripples from './Ripples'
import breakpoints from '../styles/breakpoints'
import animations from '../styles/animations'

const FlatButton = (
  {
    disabled,

    children,
    style,
    textStyle,

    ...other
  }
) =>
  <div
    style={style}
    className={['flatButton', disabled && 'disabled'].join(' ')}
  >
    <Ripples
      style={{display: 'flex', width: 'auto', padding: '0 16px'}}
      rippleColor='black'
      disabled={disabled}
      {...other}
    >
      {children}
    </Ripples>
    <style jsx>
      {
        `
      div {
        display: inline-block;

        height: 36px;
        min-width: 88px;
        border-radius: 2px;
        margin: 0 8px;

        text-align: center;
        text-transform: uppercase;

        /* To get overflow:hidden working with border-radius for ripples */
        overflow: hidden;
        z-index: 1;

        ${animations.standard('box-shadow')}
      }
      .disabled {
        background-color: rgba(0, 0, 0, .12);
      }
      @media ${breakpoints.ml} {
        div {
          height: 32px;
        }
      }
    `
      }
    </style>
  </div>

FlatButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  textStyle: PropTypes.object
}

export default FlatButton
