import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import Grid from 'components/Grid'
import get from 'utils/get'
import Accordion from 'components/Accordion'

const FAQWrapper = styled.section`
  color: ${get('colors.white')};
  margin: 0 -16px;
  padding: 64px 16px 76px;
  background-color: ${get('colors.valhalla')};

  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
    padding: 64px 32px 76px;
  }
`

const Content = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 3 / 11;
  }
`

const Title = styled(Typography)`
  display: block;
  text-align: center;
`

const Questions = styled.div`
  margin-top: 40px;
  details + details {
    margin-top: 18px;
  }
`

const FAQ = ({ faq, ...props }) => {
  return (
    <FAQWrapper {...props}>
      <Grid>
        <Content>
          <Title variant="title.m" forwardedAs="h2">
            {faq.title}
          </Title>
          <Questions>
            {faq.questions.map((question, index) => (
              <Accordion
                key={index}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </Questions>
        </Content>
      </Grid>
    </FAQWrapper>
  )
}

export default FAQ
