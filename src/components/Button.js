import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Button as ReakitButton } from 'reakit/Button'
import Link from 'components/Link'
import get from 'utils/get'
import { darken } from 'utils/colors'

const variants = {
  primary: css`
    background-color: ${p => p.$color};
    &:hover {
      background-color: ${p => darken(p.$color, 40)};
      border-color: ${p => darken(p.$color, 40)};
    }
  `,
  secondary: css`
    background-color: transparent;
    &:hover {
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

const StyledButton = styled(ReakitButton)`
  border-radius: 176px;
  border-width: 2px;
  border-style: solid;
  border-color: ${p => p.$color};
  // !important avoids conflict with "color: inherit" inside the Link component, if the Button is also a Link
  color: white !important;
  height: 46px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
  transition-property: background-color, border-color, color;
  transition-duration: 0.3s;

  ${p => variants[p.$variant]};
`

const Button = ({
  variant = 'primary',
  color = get('colors.dodgerBlue'),
  href,
  ...props
}) => (
  <StyledButton
    as={href ? Link : ReakitButton}
    href={href}
    $variant={variant}
    $color={color}
    {...props}
  />
)

Button.propTypes = {
  /**
   * The variant name, used to display the Button with different styles
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Color of the button
   */
  color: PropTypes.string,
  /**
   * Link to open on button click
   */
  href: PropTypes.string,
}

Button.defaultProps = {
  variant: 'primary',
  color: get('colors.dodgerBlue'),
  href: null,
}

export default Button
