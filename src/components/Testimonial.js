import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import { Twitter } from 'components/icons'
import Link from 'components/Link'
import Typography from 'components/Typography'
import Image from 'next/image'

const Card = styled.article`
  background-color: ${get('colors.white')};
  border-radius: 16px;
  padding: 24px;
  height: 368px;
  width: 232px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 386px;
    width: 252px;
  }
`

const TwitterIcon = styled(Twitter)`
  height: 18px;
  color: ${get('colors.valhalla.200')};
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 24px;
  }
`

const Text = styled(Typography)`
  margin-top: 16px;
  display: inline-block;
  color: ${get('colors.valhalla.400')};
  font-weight: 400;

  a {
    color: ${get('colors.dodgerBlue')};
    font-family: inherit;
  }
`

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  @media (min-width: ${get('breakpoints.lg')}) {
    width: 56px;
    height: 56px;
  }
`

const Author = styled.address`
  font-style: normal;
  display: flex;
  align-items: center;
`

const AuthorName = styled(Typography)`
  color: ${get('colors.valhalla')};
  font-size: 12px;
  line-height: 18px;
  font-weight: ${get('fontWeight.bold')};
`

const AuthorLink = styled(Link)`
  span {
    color: ${get('colors.valhalla.300')};
    font-size: 12px;
    line-height: 18px;
    font-weight: ${get('fontWeight.normal')};
  }
`

const AuthorInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
`

const Testimonial = ({ testimonial, ...props }) => {
  return (
    <Link href={testimonial.link} target="_blank">
      <Card {...props}>
        <TwitterIcon />
        <div style={{ flex: 1 }}>
          <Text
            variant="small"
            dangerouslySetInnerHTML={{ __html: testimonial.text }}
          />
        </div>
        <Author>
          <ProfilePicture
            layout="fixed"
            width={56}
            height={56}
            src={testimonial.author.profilePicture}
          />
          <AuthorInfos>
            <AuthorName>{testimonial.author.realName}</AuthorName>
            <AuthorLink
              rel="author"
              href={testimonial.author.authorLink}
              target="_blank"
            >
              <Typography>{testimonial.author.pseudo}</Typography>
            </AuthorLink>
          </AuthorInfos>
        </Author>
      </Card>
    </Link>
  )
}

export default Testimonial
