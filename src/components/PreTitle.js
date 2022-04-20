import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Typography from 'components/Typography'
import get from 'utils/get'

const StyledPreTitle = styled(Typography)`
  color: ${p => p.$color};
  text-transform: uppercase;
`

const PreTitle = ({ preTitle, color, ...props }) => {
  return (
    <StyledPreTitle variant="title.caps" $color={color} {...props}>
      {preTitle}
    </StyledPreTitle>
  )
}

PreTitle.propTypes = {
  /**
   * Text to display
   */
  preTitle: PropTypes.string,
  /**
   * Text to display
   */
  color: PropTypes.string,
}

PreTitle.defaultProps = {
  preTitle: null,
  color: get('colors.lila'),
}

export default PreTitle
