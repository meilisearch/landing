import React from 'react'
import Testimonial from 'components/Testimonial'

export default {
  title: 'Components/Testimonial',
  parameters: {
    layout: 'padded',
  },
}

const tweet = {
  text: 'Wow <a href="https://twitter.com/meilisearch/" target="_blank">@meilisearch</a> is an incredible piece of software. Would love to have one of the devs do a talk at <a href="https://twitter.com/RustDublin/" target="_blank">@RustDublin</a>',
  author: {
    realName: 'Anton Whalley 🦀',
    pseudo: '@dhigit9',
    profilePicture:
      'https://pbs.twimg.com/profile_images/1457815736659980293/MEl3ePpS_400x400.jpg',
    twitterLink: 'https://twitter.com/dhigit9/',
  },
}

export const Default = () => <Testimonial tweet={tweet} />
