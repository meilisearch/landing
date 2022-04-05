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
  align-items: center;
  background-color: transparent;
  transition: background-color 300ms;
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 16px 28px;
  }
`

const StyledMenuItem = styled.a`
  display: block;
  outline: none;

  @media (max-width: ${get('breakpoints.lg')}) {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  &:hover,
  &:focus {
    @media (min-width: ${get('breakpoints.lg')}) {
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
  @media (min-width: ${get('breakpoints.lg')}) {
    color: ${get('colors.ashes')};
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32px;
`

const StyledIcon = styled.img`
  width: 20px;
  flex-shrink: 0;
  color: ${get('colors.hotPink')};
  @media (min-width: ${get('breakpoints.lg')}) {
    color: white;
  }
`

const MenuItem = ({ title, icon, href, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ReakitMenuItem as={StyledMenuItem} {...props}>
        <Content>
          {icon && <StyledIcon as={icon} alt={title} />}
          <Text>
            <Title>{title}</Title>
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
   * Icon to display next to the next
   */
  icon: PropTypes.any,
}

MenuItem.defaultProps = {
  title: null,
  icon: null,
}

export default MenuItem
