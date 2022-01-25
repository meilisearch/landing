import styled, { css } from 'styled-components'
import { MenuButton as ReakitMenuButton } from 'reakit/Menu'
import PropTypes from 'prop-types'
import { Arrow } from 'components/icons'
import get from 'utils/get'

const MenuButton = styled(ReakitMenuButton)`
  z-index: 10;
  display: inline-flex;
  align-items: center;
  color: white;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  transition: color 300ms;
  outline: none;
  &:hover,
  &:focus {
    color: ${get('colors.hotPink')};
  }
`

const StyledArrow = styled(Arrow)`
  margin-left: 10px;
  transform: rotate(0deg);
  transition: transform 300ms;
  stroke: currentColor;
  width: 10px;
  ${p =>
    p.$visible &&
    css`
      transform: rotate(180deg);
    `}
`

const MenuDisclosure = ({ children, ...props }) => (
  <MenuButton {...props}>
    {children}
    <StyledArrow $visible={props.visible} />
  </MenuButton>
)

MenuDisclosure.propTypes = {
  /**
   * The content to appear inside the MenuDisclosure
   */
  children: PropTypes.node,
}

MenuDisclosure.defaultProps = {
  children: null,
}

export default MenuDisclosure
