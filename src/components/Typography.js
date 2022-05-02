import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import get from 'utils/get'
import lodashGet from 'lodash.get'

const variants = {
  title: {
    xl: {
      tag: 'span',
      style: css`
        font-family: Poppins;
        font-weight: 700;
        letter-spacing: -1%;
        line-height: 140%;
        font-size: 35px;
        @media (min-width: ${get('breakpoints.md')}) {
          font-size: 52px;
        }
        @media (min-width: ${get('breakpoints.xl')}) {
          font-size: 64px;
        }
      `,
    },
    l: {
      tag: 'span',
      style: css`
        font-family: Poppins;
        font-weight: 700;
        letter-spacing: -1%;
        line-height: 140%;
        font-size: 30px;
        @media (min-width: ${get('breakpoints.md')}) {
          font-size: 42px;
        }
        @media (min-width: ${get('breakpoints.xl')}) {
          font-size: 52px;
        }
      `,
    },
    m: {
      tag: 'span',
      style: css`
        font-family: Poppins;
        font-weight: 600;
        letter-spacing: -1%;
        line-height: 140%;
        font-size: 25px;
        @media (min-width: ${get('breakpoints.md')}) {
          font-size: 34px;
        }
        @media (min-width: ${get('breakpoints.xl')}) {
          font-size: 40px;
        }
      `,
    },
    s: {
      tag: 'span',
      style: css`
        font-family: Poppins;
        font-weight: 600;
        letter-spacing: -1%;
        line-height: 140%;
        font-size: 21px;
        @media (min-width: ${get('breakpoints.md')}) {
          font-size: 26px;
        }
        @media (min-width: ${get('breakpoints.xl')}) {
          font-size: 32px;
        }
      `,
    },
    xs: {
      tag: 'span',
      style: css`
        font-family: Poppins;
        font-weight: 500;
        line-height: 140%;
        font-size: 18px;
        @media (min-width: ${get('breakpoints.md')}) {
          font-size: 22px;
        }
        @media (min-width: ${get('breakpoints.xl')}) {
          font-size: 26px;
        }
      `,
    },
    caps: {
      tag: 'span',
      style: css`
        font-family: Poppins;
        font-weight: 700;
        letter-spacing: 3%;
        line-height: 140%;
        text-transform: uppercase;
        font-size: 11px;
        @media (min-width: ${get('breakpoints.md')}) {
          font-size: 13px;
        }
        @media (min-width: ${get('breakpoints.xl')}) {
          font-size: 14px;
        }
      `,
    },
  },
  body: {
    l: {
      default: {
        tag: 'span',
        style: css`
          font-family: Inter;
          line-height: 150%;
          font-size: 15px;
          font-weight: 400;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 16px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 18px;
          }
        `,
      },
      bold: {
        tag: 'span',
        style: css`
          font-family: Inter;
          line-height: 150%;
          font-size: 15px;
          font-weight: 600;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 16px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 18px;
          }
        `,
      },
      link: {
        tag: 'span',
        style: css`
          font-family: Inter;
          line-height: 150%;
          font-size: 15px;
          font-weight: 600;
          text-decoration: underline;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 16px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 18px;
          }
        `,
      },
    },
    m: {
      default: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 400;
          line-height: 150%;
          font-size: 14px;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 15px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 16px;
          }
        `,
      },
      bold: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 600;
          line-height: 150%;
          font-size: 14px;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 15px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 16px;
          }
        `,
      },
      link: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 600;
          line-height: 150%;
          font-size: 14px;
          text-decoration: underline;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 15px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 16px;
          }
        `,
      },
    },
    s: {
      default: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 400;
          line-height: 150%;
          font-size: 12px;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 13px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 14px;
          }
        `,
      },
      bold: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 600;
          line-height: 150%;
          font-size: 12px;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 13px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 14px;
          }
        `,
      },
      link: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 600;
          line-height: 150%;
          font-size: 12px;
          text-decoration: underline;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 13px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 14px;
          }
        `,
      },
    },
    xs: {
      default: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 400;
          line-height: 150%;
          font-size: 10px;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 11px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 12px;
          }
        `,
      },
      bold: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 600;
          line-height: 150%;
          font-size: 10px;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 11px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 12px;
          }
        `,
      },
      link: {
        tag: 'span',
        style: css`
          font-family: Inter;
          font-weight: 600;
          line-height: 150%;
          text-decoration: underline;
          font-size: 10px;
          @media (min-width: ${get('breakpoints.md')}) {
            font-size: 11px;
          }
          @media (min-width: ${get('breakpoints.xl')}) {
            font-size: 12px;
          }
        `,
      },
    },
  },
}

const StyledTypography = styled.span`
  margin: 0;
  display: inline-block;
  ${p => p.$variant.style};
`

const Typography = ({ variant = 'body.m.default', forwardedAs, ...props }) => {
  const safeVariant =
    lodashGet(variants, variant) || lodashGet(variants, 'body.m.default')
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
    'title.xl',
    'title.l',
    'title.m',
    'title.s',
    'title.xs',
    'title.caps',
    'body.l.default',
    'body.l.bold',
    'body.l.link',
    'body.m.default',
    'body.m.bold',
    'body.m.link',
    'body.s.default',
    'body.s.bold',
    'body.s.link',
    'body.xs.default',
    'body.xs.bold',
    'body.xs.link',
  ]),
}

Typography.defaultProps = {
  variant: 'body.m.default',
}

export default Typography
