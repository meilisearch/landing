import React from 'react'
import styled from 'styled-components'
import PreTitle from 'components/PreTitle'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Tag from 'components/Tag'
import BaseCard from 'components/Card'
import get from 'utils/get'

const Section = styled.section`
  padding: 72px 0;

  @media (min-width: ${get('breakpoints.md')}) {
    padding: 88px 0;
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 128px 0;
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 168px 0;
  }
`

const TitleSection = styled.div`
  grid-column: 1 / -1;
`

const Cta = styled(Button)`
  margin-top: 20px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
  }
`

const SmallSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: ${get('breakpoints.md')}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Card = styled(BaseCard)`
  color: white;
  grid-column: 1/-1;
  margin-top: 24px;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: span 4;
  }
`

const List = styled(Grid)`
  margin-top: 48px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 56px;
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 72px;
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 96px;
  }
`

const NoJobOffer = ({ jobOffers: { noJobOffer } }) => (
  <Card style={{ backgroundColor: get('colors.valhalla.700') }}>
    <Typography variant="title.xs">{noJobOffer.title}</Typography>
    <Typography variant="body.s.default">{noJobOffer.description}</Typography>
    <Cta
      variant="secondary"
      color={get('colors.white')}
      href={noJobOffer.cta.href}
      target={noJobOffer.cta.target}
    >
      <Typography variant="body.s.bold">{noJobOffer.cta.title}</Typography>
    </Cta>
  </Card>
)

const JobOffer = ({ readMore, job }) => (
  <Card style={{ backgroundColor: get('colors.valhalla.700') }}>
    <Tag color="colors.hotPink">{job.categories.team}</Tag>
    <Typography variant="title.xs">{job.text}</Typography>
    <Cta
      variant="secondary"
      color={get('colors.white')}
      href={job.hostedUrl}
      target="_blank"
    >
      <Typography variant="body.s.bold">{readMore}</Typography>
    </Cta>
  </Card>
)

const JobList = ({ loading, jobOffersList, jobOffers }) => {
  if (loading) return null
  if (!jobOffersList || jobOffersList.length === 0)
    return <NoJobOffer jobOffers={jobOffers} />
  return jobOffersList.map((job, index) => (
    <JobOffer readMore={jobOffers.readMore} key={index} job={job} />
  ))
}

const JobOffers = ({ jobOffers, ...props }) => {
  const [loading, setLoading] = React.useState(true)
  const [jobOffersList, setJobOffersList] = React.useState([])

  React.useEffect(() => {
    const getJobOffers = async () =>
      await fetch('https://api.lever.co/v0/postings/meili')
        .then(response => response.json())
        .then(data => {
          setJobOffersList(data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err.message)
        })

    getJobOffers()
  }, [])

  return (
    <Section {...props}>
      <Grid>
        <TitleSection>
          <PreTitle
            color={get('colors.hotPink')}
            preTitle={jobOffers.preTitle}
          />
          <SmallSection>
            <Typography
              variant="title.m"
              style={{ color: 'white' }}
              forwardedAs="h2"
            >
              {jobOffers.title}
            </Typography>
            {jobOffersList && jobOffersList.length > 0 && (
              <Cta
                variant="secondary"
                color={get('colors.white')}
                href={jobOffers.cta.href}
                target={jobOffers.cta.target}
              >
                <Typography variant="body.s.bold">
                  {jobOffers.cta.title}
                </Typography>
              </Cta>
            )}
          </SmallSection>
        </TitleSection>
      </Grid>
      <List>
        <JobList
          loading={loading}
          jobOffersList={jobOffersList}
          jobOffers={jobOffers}
        />
      </List>
    </Section>
  )
}

export default JobOffers
