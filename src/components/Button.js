import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Button as ReakitButton } from 'reakit/Button'
import Link from 'components/Link'
import get from 'utils/get'
import getColorName from 'utils/getColorName'

const variants = {
  primary: css`
    background-color: ${p => p.$color};
    &:hover,
    &:focus {
      background-color: ${p => get(`colors.${getColorName(p.$color)}.600`)};
      border-color: ${p => get(`colors.${getColorName(p.$color)}.600`)};
    }
    &[aria-disabled='true'] {
      background-color: ${get('colors.valhalla.100')};
      border-color: ${get('colors.valhalla.100')};
    }
  `,
  secondary: css`
    background-color: transparent;
    &:hover,
    &:focus {
      ${p =>
        p.$color === '#FFF' &&
        css`
          // !important avoids conflict with "color: inherit" inside the Link component, if the Button is also a Link
          color: ${get('colors.valhalla')} !important;
        `};
      background-color: ${p => p.$color};
    }
  `,
}

const sizes = {
  default: css`
    height: 46px;
  `,
  small: css`
    height: 38px;
  `,
}

const StyledButton = styled(ReakitButton)`
  border-radius: 176px;
  border-width: 2px;
  border-style: solid;
  border-color: ${p => p.$color};
  // !important avoids conflict with "color: inherit" inside the Link component, if the Button is also a Link
  color: white !important;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
  transition-property: background-color, border-color, color;
  transition-duration: 0.3s;
  outline: none;
  flex-shrink: 0;
  pointer-events: auto;

  ${p => variants[p.$variant]};
  ${p => sizes[p.$size]};
`

const Button = ({
  variant = 'primary',
  color = get('colors.dodgerBlue'),
  size = 'default',
  href,
  disabled,
  ...props
}) => (
  <StyledButton
    as={href ? Link : ReakitButton}
    href={href}
    $size={size}
    $variant={variant}
    $color={color}
    disabled={disabled}
    {...props}
  />
)

Button.propTypes = {
  /**
   * The variant name, used to display the Button with different styles
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['default', 'small']),
  /**
   * Color of the button
   */
  color: PropTypes.string,
  /**
   * Link to open on button click
   */
  href: PropTypes.string,
  /**
   * Wether the button should be disabled or not
   */
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  variant: 'primary',
  color: get('colors.dodgerBlue'),
  size: 'default',
  href: null,
  disabled: false,
}

export default Button
