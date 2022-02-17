import React from 'react'
import styled from 'styled-components'
import { SearchBox as IsSearchbox } from 'react-instantsearch-dom'
import { MagnifyingGlass, Cross } from 'components/icons'
import get from 'utils/get'

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

    &:hover,
    &:focus {
      border-color: ${get('colors.lila')};
      background-color: ${get('colors.lila.200')};
    }
    &:active {
      border-color: ${get('colors.lila')};
      background-color: ${get('colors.white')};
    }
  }
  button[type='reset'] {
    right: 16px;
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

const Searchbox = props => {
  React.useEffect(() => {
    const submitButton = document.getElementsByClassName(
      'ais-SearchBox-submit'
    )[0]
    submitButton.setAttribute('tabindex', -1)
  }, [])
  return (
    <StyledSearchbox
      autoFocus
      submit={<MagnifyingGlass width={20} />}
      reset={<Cross width={11} />}
      translations={{
        submitTitle: null,
        resetTitle: null,
        placeholder: null,
      }}
      {...props}
    />
  )
}

export default Searchbox
