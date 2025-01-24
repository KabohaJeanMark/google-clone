import React from 'react'
import Search from '../components/Search'
import { useStateValue } from '../contextAPI/StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import '../styles/SearchPage.css'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term)

  console.log(data)

  return (
    <div className='searchPage'>
      <Search hideButtons/>
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage
