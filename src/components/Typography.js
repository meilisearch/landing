import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import get from 'utils/get'

const variants = {
  default: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-weight: ${get('fontWeight.medium')};
      font-size: 15px;
      line-height: 21px;
    `,
  },
  body: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-size: 15px;
      line-height: 21px;
      @media (min-width: ${get('breakpoints.md')}) {
        font-size: 16px;
        line-height: 24px;
      }
    `,
  },
  title1: {
    tag: 'span',
    style: css`
      font-family: Poppins;
      font-weight: ${get('fontWeight.bold')};
      font-size: 32px;
      line-height: 145%;
      letter-spacing: -0.02em;
      margin: 0;
      @media (min-width: ${get('breakpoints.lg')}) {
        font-size: 50px;
        line-height: 150%;
      }
      @media (min-width: ${get('breakpoints.xl')}) {
        font-size: 64px;
        line-height: 96px;
      }
    `,
  },
  title2: {
    tag: 'span',
    style: css`
      font-family: Poppins;
      font-weight: ${get('fontWeight.semibold')};
      letter-spacing: -0.02em;
      font-size: 28px;
      line-height: 40px;
      @media (min-width: ${get('breakpoints.lg')}) {
        font-size: 34px;
        line-height: 51px;
      }
      @media (min-width: ${get('breakpoints.xl')}) {
        font-size: 40px;
        line-height: 60px;
      }
    `,
  },
  title3: {
    tag: 'span',
    style: css`
      font-family: Poppins;
      font-weight: ${get('fontWeight.semibold')};
      font-size: 21px;
      line-height: 30px;
      letter-spacing: -0.02em;
      @media (min-width: ${get('breakpoints.xl')}) {
        font-size: 24px;
        line-height: 36px;
      }
    `,
  },
  preTitle: {
    tag: 'span',
    style: css`
      font-family: Poppins;
      font-weight: ${get('fontWeight.bold')};
      letter-spacing: 0.03em;
      font-size: 11px;
      line-height: 150%;
      @media (min-width: ${get('breakpoints.lg')}) {
        font-size: 12px;
        line-height: 150%;
      }
      @media (min-width: ${get('breakpoints.lg')}) {
        font-size: 14px;
        line-height: 21px;
      }
    `,
  },
  navigation: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-weight: ${get('fontWeight.medium')};
      font-size: 15px;
      line-height: 21px;
      @media (min-width: ${get('breakpoints.lg')}) {
        font-size: 18px;
        line-height: 22px;
      }
    `,
  },
  small: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-size: 13px;
      line-height: 19.5px;
      @media (min-width: ${get('breakpoints.lg')}) {
        font-size: 14px;
        line-height: 21px;
      }
    `,
  },
  ctaBig: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-weight: ${get('fontWeight.bold')};
      font-size: 16px;
      line-height: 22px;
    `,
  },
}

const StyledTypography = styled.span`
  margin: 0;
  display: inline-block;
  ${p => p.$variant.style};
`

const Typography = ({ variant = 'default', forwardedAs, ...props }) => {
  const safeVariant = variants[variant] || variants.default
  const { tag = 'span', style = css`` } = safeVariant
  return (
    <StyledTypography
      as={forwardedAs || tag}
      {...style}
      $variant={safeVariant}
      {...props}
    />
  )
}

Typography.propTypes = {
  /**
   * The variant name, used to display Typography with different styles
   */
  variant: PropTypes.oneOf([
    'default',
    'body',
    'title1',
    'title2',
    'title3',
    'preTitle',
    'navigation',
    'small',
    'ctaBig',
  ]),
}

Typography.defaultProps = {
  variant: 'default',
}

export default Typography
