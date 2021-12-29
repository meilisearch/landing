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
      font-size: 16px;
      line-height: 24px;
      @media (min-width: ${get('breakpoints.tablet')}) {
        font-size: 15px;
        line-height: 21px;
      }
    `,
  },
  h1: {
    tag: 'span',
    style: css`
      font-family: Poppins;
      font-weight: ${get('fontWeight.bold')};
      font-size: 32px;
      line-height: 46px;
      letter-spacing: -0.02em;
      @media (min-width: ${get('breakpoints.tablet')}) {
        font-size: 64px;
        line-height: 96px;
      }
    `,
  },
  preTitle: {
    tag: 'span',
    style: css`
      font-family: Poppins;
      font-weight: ${get('fontWeight.bold')};
      letter-spacing: 0.03em;
      font-size: 14px;
      line-height: 21px;
    `,
  },
  navigation: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-weight: ${get('fontWeight.medium')};
      font-size: 15px;
      line-height: 21px;
      @media (min-width: ${get('breakpoints.desktop')}) {
        font-size: 18px;
        line-height: 22px;
      }
    `,
  },
  smallText: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-weight: ${get('fontWeight.medium')};
      font-size: 13px;
      line-height: 19.5px;
      @media (min-width: ${get('breakpoints.desktop')}) {
        font-size: 14px;
        line-height: 21px;
      }
    `,
  },
  small: {
    tag: 'span',
    style: css`
      font-family: Inter;
      font-size: 14px;
      line-height: 21px;
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
  ${p => p.$variant.style};
`

const Typography = ({ variant = 'default', ...props }) => {
  const safeVariant = variants[variant] || variants.default
  const { tag = 'span', style = css`` } = safeVariant
  return (
    <StyledTypography as={tag} {...style} $variant={safeVariant} {...props} />
  )
}

Typography.propTypes = {
  /**
   * The variant name, used to display Typography with different styles
   */
  variant: PropTypes.oneOf([
    'default',
    'body',
    'h1',
    'preTitle',
    'navigation',
    'smallText',
    'small',
    'ctaBig',
  ]),
}

Typography.defaultProps = {
  variant: 'default',
}

export default Typography
