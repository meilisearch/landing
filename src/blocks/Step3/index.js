import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import PropTypes from 'prop-types'
import TitleSection from './TitleSection'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

const Section = styled.section`
  position: relative;
  color: ${get('colors.white')};
  padding-bottom: 72px;
  @media (min-width: ${get('breakpoints.lg')}) {
    padding-bottom: 156px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding-bottom: 192px;
  }
`

const Step3 = ({
  step3Props: step,
  steps = [],
  color = get('colors.dodgerBlue'),
  ...props
}) => (
  <Section {...props}>
    <TitleSection step={step} steps={steps} color={color} />
    <FirstSection section={step.firstSection} color={color} />
    <SecondSection section={step.secondSection} color={color} />
  </Section>
)

Step3.propTypes = {
  /**
   * Primary color of the block
   */
  color: PropTypes.string,
  /**
   * List of the different steps to display the anchors
   */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      preTitle: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

Step3.defaultProps = {
  color: get('colors.dodgerBlue'),
  steps: [],
}

export default Step3
