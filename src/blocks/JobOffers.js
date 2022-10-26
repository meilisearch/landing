import React from 'react'
import styled from 'styled-components'
import PreTitle from 'components/PreTitle'
import get from 'utils/get'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Tag from 'components/Tag'

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

const Card = styled.div`
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

const JobList = ({ loading, jobOffersList, jobOffers }) => {
  if (loading) return null
  if (!jobOffersList) return <div>no job offer currently available</div>
  return (
    <List>
      {jobOffersList.map((job, index) => (
        <Card
          key={index}
          style={{ backgroundColor: get('colors.valhalla.700') }}
        >
          <Tag color="colors.hotPink">{job.categories.team}</Tag>
          <Typography>{job.text}</Typography>
          <Cta
            variant="secondary"
            color={get('colors.white')}
            href={job.hostedUrl}
            target="_blank"
          >
            <Typography>{jobOffers.readMore}</Typography>
          </Cta>
        </Card>
      ))}
    </List>
  )
}

const JobOffers = ({ jobOffers }) => {
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
    <Section>
      <Grid>
        <TitleSection>
          <PreTitle
            color={get('colors.hotPink')}
            preTitle={jobOffers.preTitle}
          />
          <SmallSection>
            <Typography variant="title.m" style={{ color: 'white' }}>
              {jobOffers.title}
            </Typography>
            <Cta
              variant="secondary"
              color={get('colors.white')}
              href={jobOffers.cta.href}
              target={jobOffers.cta.target}
            >
              <Typography>{jobOffers.cta.title}</Typography>
            </Cta>
          </SmallSection>
        </TitleSection>
      </Grid>
      <JobList
        loading={loading}
        jobOffersList={jobOffersList}
        jobOffers={jobOffers}
      />
    </Section>
  )
}

export default JobOffers
