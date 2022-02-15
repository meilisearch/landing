import React from 'react'
import styled, { keyframes } from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Testimonial from 'components/Testimonial'
import { RightArrow } from 'components/icons'

const Section = styled.section`
  background-color: ${get('colors.dodgerBlue')};
  overflow: hidden;
  color: ${get('colors.white')};
  padding: 64px 0 72px;
  margin: 0 -16px;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 58px 0;
    margin: 0 -32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 96px 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 156px 0;
  }
`

const scroll = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-50%);
}
`

const TestimonialsList = styled.div`
  width: 100%;
  overflow: hidden;
`

const Carousel = styled.div`
  z-index: 2;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${p => p.$nbTestimonials}, 1fr);
  grid-gap: 0 16px;
  justify-content: center;
  align-items: center;
  // Number of cards * width + gutter
  width: calc(
    ${p => p.$nbTestimonials} * 252px + ${p => p.$nbTestimonials - 1} * 16px
  );
  animation: ${scroll} 45s linear infinite;
`

const Text = styled.div`
  padding: 0 16px;
`

const Content = styled.div`
  z-index: 2;
  grid-column: 1 / -1;
  margin-top: 48px;
  text-align: center;
  padding: 0 16px;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 3 / 11;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 0 32px;
  }
`

const Cta = styled(Button)`
  margin-top: 32px;
  &:hover,
  &:focus {
    color: ${get('colors.dodgerBlue')} !important;
  }
`

const Decorator = styled.div`
  background: url(/images/decorator6.svg) no-repeat;
  background-size: 960px 908px;
  position: absolute;
  top: -530px;
  left: -198px;
  right: auto;
  bottom: auto;
  width: 960px;
  height: 908px;
  z-index: 1;

  @media (min-width: ${get('breakpoints.md')}) {
    top: -522px;
    left: -68px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    top: -684px;
    left: 58px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    top: -642px;
    left: 476px;
  }
`

const Testimonials = ({ testimonialsProps: testimonials, ...props }) => {
  // Duplicate the list in order to fake an infinite loop
  // useMemo
  const testimonialsList = React.useMemo(
    () => [...testimonials.list, ...testimonials.list],
    [testimonials.list]
  )
  return (
    <Section {...props}>
      <TestimonialsList>
        <Carousel $nbTestimonials={testimonialsList.length}>
          {testimonialsList.map((testimonial, index) => (
            <Testimonial
              testimonial={testimonial}
              key={index}
              // Trick to use the GPU for rendering
              style={{ transform: 'translate3d(0, 0, 0)' }}
            />
          ))}
        </Carousel>
      </TestimonialsList>
      <Text>
        <Grid style={{ position: 'relative' }}>
          <Content>
            <Typography variant="title3">{testimonials.description}</Typography>
            <Cta
              color={get('colors.white')}
              variant="secondary"
              href={testimonials.cta.href}
              target={testimonials.cta.target}
            >
              <Typography
                variant="ctaBig"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <RightArrow width={20} style={{ marginRight: 12 }} />
                {testimonials.cta.title}
              </Typography>
            </Cta>
          </Content>
          <Decorator />
        </Grid>
      </Text>
    </Section>
  )
}

export default Testimonials
