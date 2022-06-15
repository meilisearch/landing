import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import get from 'utils/get'
import { Arrow as BaseArrow } from 'components/icons'

const Summary = styled.summary`
  color: ${get('colors.white')};
  padding: 22px 16px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
  ::marker {
    display: none;
    content: '';
  }

  // Fix for Safari
  ::-webkit-details-marker {
    display: none;
    content: '';
  }
`

// Fix for Safari
const SummaryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Details = styled.details`
  background: ${get('colors.valhalla.700')};
  border: 1px solid ${get('colors.valhalla.400')};
  border-radius: 8px;

  &:focus-within {
    border: 1px solid ${get('colors.valhalla.300')};
  }

  &[open] {
    summary > div > svg {
      transform: rotate(180deg);
    }
  }
`

const Arrow = styled(BaseArrow)`
  width: 15px;
  margin-left: 16px;
  color: ${get('colors.ashes.900')};
  transform: rotate(0deg);
  transition: transform 300ms;
`

const Question = styled(Typography)`
  font-weight: ${get('fontWeight.semibold')};
  @media (min-width: ${get('breakpoints.md')}) {
    font-weight: ${get('fontWeight.bold')};
  }
`

const Answer = styled(Typography)`
  color: ${get('colors.ashes.900')};
  margin-top: -8px;
  padding: 0px 16px 20px;
  font-weight: ${get('fontWeight.normal')};
  @media (min-width: ${get('breakpoints.md')}) {
    font-weight: ${get('fontWeight.medium')};
  }
  a {
    color: inherit;
    text-decoration: underline;
  }
`

const Accordion = ({ question, answer }) => {
  return (
    <Details>
      <Summary>
        <SummaryContent>
          <Question variant="body.m.bold">{question}</Question>
          <Arrow />
        </SummaryContent>
      </Summary>
      <Answer
        variant="body.m.default"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </Details>
  )
}

export default Accordion
