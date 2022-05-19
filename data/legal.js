const getLegalData = (t = () => {}) => ({
  text: {
    legal: t('legal.legal'),
  },
  menu: [
    {
      title: 'Privacy policy',
      href: '/privacy-policy',
    },
    {
      title: 'Terms of use',
      href: '/terms-of-use',
    },
  ],
})

export default getLegalData
