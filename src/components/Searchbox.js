import React from 'react'
import styled from 'styled-components'
import { SearchBox as IsSearchbox } from 'react-instantsearch-dom'
import { MagnifyingGlass, Cross } from 'components/icons'
import get from 'utils/get'
import { AnalyticsBrowser } from '@segment/analytics-next'
import _debounce from 'lodash.debounce'

const StyledSearchbox = styled(IsSearchbox)`
  width: 100%;
  svg {
    color: ${get('colors.lila')};
    transition: color 300ms;
  }
  form {
    position: relative;
    flex: 1;
    height: 46px;
    width: 100%;
  }
  button {
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    &:focus {
      filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.4));
    }
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  button[type='submit'] {
    left: 16px;
    display: inline-flex;
  }
  input {
    border-width: 2px;
    border-color: transparent;
    border-style: solid;
    border-radius: 12px;
    background-color: ${get('colors.white')};
    color: ${get('colors.valhalla')};
    width: 100%;
    height: 100%;
    padding-left: 48px;
    padding-right: 32px;
    outline: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    transition: border-color 300ms, color 300ms, background-color 300ms;
    -webkit-appearance: none;

    ::placeholder {
      color: ${get('colors.valhalla.200')};
      font-family: Inter;
      font-weight: ${get('fontWeight.normal')};
      font-size: 14px;
      line-height: 150%;
    }

    &:hover {
      border-color: ${get('colors.lila')};
      background-color: ${get('colors.lila.100')};
    }
    &:focus {
      border-color: ${get('colors.lila')};
      background-color: ${get('colors.white')};
    }
  }
  button[type='reset'] {
    right: 16px;
    height: 16px;
    opacity: 1;
    cursor: pointer;
    &[hidden] {
      opacity: 0;
    }
  }
  input[type='search' i]::-webkit-search-cancel-button {
    display: none;
  }
`

const Searchbox = ({ placeholderSearch = null, ...props }) => {
  const [analytics, setAnalytics] = React.useState(undefined)
  const writeKey = process.env.NEXT_PUBLIC_SEGMENT_KEY

  const sendDataToSegment = e => {
    if (e.target.value) {
      const processingTimeInMs = document.querySelector(
        '.ais-Stats-text strong:nth-child(2)'
      ).innerText
      analytics?.track('demo-search', {
        query: e.target.value,
        processingTimeInMs,
      })
    }
  }

  React.useEffect(() => {
    const disableMagnifyingGlassFocus = () => {
      const submitButton = document.getElementsByClassName(
        'ais-SearchBox-submit'
      )[0]
      submitButton.setAttribute('tabindex', -1)
    }
    disableMagnifyingGlassFocus()
  }, [])

  React.useEffect(() => {
    const loadAnalytics = async () => {
      let [response] = await AnalyticsBrowser.load({ writeKey })
      setAnalytics(response)
    }
    loadAnalytics()
  }, [writeKey])

  return (
    <StyledSearchbox
      submit={<MagnifyingGlass width={20} />}
      reset={<Cross width={16} />}
      translations={{
        submitTitle: null,
        resetTitle: null,
        placeholder: placeholderSearch,
      }}
      onChange={_debounce(sendDataToSegment, 1000)}
      {...props}
    />
  )
}

export default Searchbox
