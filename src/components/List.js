import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import get from 'utils/get'

const Ul = styled.ul`
  padding: 0;
  > li + li {
    margin-top: 4px;
  }
`

const Li = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  color: ${get('colors.ashes')};
  &:before {
    width: 18px;
    height: 18px;
    background-color: ${p => p.$bulletColor};
    content: '';
    mask: url(/icons/check.svg) no-repeat 50% 50%;
    mask-size: cover;
    margin-right: 8px;
  }
`

const Element = ({ bulletColor = get('colors.dodgerBlue'), ...props }) => (
  <Li $bulletColor={bulletColor} {...props} />
)

const List = props => <Ul {...props} />

List.Element = Element

List.propTypes = {
  /**
   * Color of the li bullets
   */
  bulletColor: PropTypes.string,
}

List.defaultProps = {
  bulletColor: get('colors.dodgerBlue'),
}

export default List
