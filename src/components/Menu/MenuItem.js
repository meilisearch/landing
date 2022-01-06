import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from 'components/Typography'
import NextLink from 'next/link'
import { MenuItem as ReakitMenuItem } from 'reakit/Menu'
import get from 'utils/get'

const Content = styled.div`
  width: 100%;
  outline: none;
  display: flex;
  align-items: flex-start;
  background-color: transparent;
  transition: background-color 300ms;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 16px 28px;
  }
`

const StyledMenuItem = styled.a`
  display: block;
  outline: none;

  @media (max-width: ${get('breakpoints.md')}) {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  &:hover,
  &:focus {
    @media (min-width: ${get('breakpoints.md')}) {
      ${Content} {
        background-color: ${get('colors.valhalla.700')};
        span:first-child {
          color: ${get('colors.hotPink')};
          transition: color 300ms;
        }
        span:nth-child(2) {
          color: ${get('colors.white')};
          transition: color 300ms;
        }
        svg {
          color: ${get('colors.hotPink')};
          transition: color 300ms;
        }
      }
    }
  }
`

const Title = styled(Typography)`
  color: ${get('colors.white')};
  @media (min-width: ${get('breakpoints.md')}) {
    color: ${get('colors.ashes')};
  }
`

const SubTitle = styled(Typography)`
  display: none;
  color: ${get('colors.valhalla.100')};
  @media (min-width: ${get('breakpoints.md')}) {
    display: inline-block;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32px;
`

const StyledIcon = styled.img`
  margin-top: 6px;
  width: 16px;
  flex-shrink: 0;
  color: ${get('colors.hotPink')};
  @media (min-width: ${get('breakpoints.md')}) {
    color: white;
  }
`

const MenuItem = ({ title, subtitle, icon, href, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ReakitMenuItem as={StyledMenuItem} {...props}>
        <Content>
          {icon && <StyledIcon as={icon} alt={title} />}
          <Text>
            <Title variant="navigation">{title}</Title>
            {subtitle && <SubTitle variant="smallText">{subtitle}</SubTitle>}
          </Text>
        </Content>
      </ReakitMenuItem>
    </NextLink>
  )
}

MenuItem.propTypes = {
  /**
   * Title of the link
   */
  title: PropTypes.string,
  /**
   * Description of the link
   */
  subtitle: PropTypes.string,
  /**
   * Icon to display next to the next
   */
  icon: PropTypes.any,
}

MenuItem.defaultProps = {
  title: null,
  subtitle: null,
  icon: null,
}

export default MenuItem
