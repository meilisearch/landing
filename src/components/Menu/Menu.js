import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Menu as ReakitMenu } from 'reakit/Menu'
import get from 'utils/get'

const MenuContent = styled.div`
  overflow: hidden;
  transition: transform 300ms, opacity 300ms;
  margin-top: 16px;
  @media (min-width: ${get('breakpoints.lg')}) {
    border: 1px solid ${get('colors.valhalla.400')};
    border-radius: 8px;
    background-color: ${get('colors.valhalla')};
    padding-left: 0;
    max-width: 360px;
  }

  ${p =>
    p.$animated &&
    css`
      transform-origin: top center;
      transform: translateY(0);
      opacity: 0;
      margin-top: 0;
    `};

  [data-enter] & {
    transform: translateY(16px);
    opacity: 100;
  }
`

const MenuWrapper = styled(ReakitMenu)`
  margin: 0;
  z-index: 50;
`

const Menu = ({ ariaLabel, children, ...props }) => (
  <MenuWrapper aria-label={ariaLabel} {...props}>
    <MenuContent $animated={props.animated}>{children}</MenuContent>
  </MenuWrapper>
)

Menu.propTypes = {
  /**
   * aria-label for accessibility
   */
  ariaLabel: PropTypes.string,
  /**
   * The content to appear inside the Menu
   */
  children: PropTypes.node,
}

Menu.defaultProps = {
  ariaLabel: null,
  children: null,
}

export default Menu
