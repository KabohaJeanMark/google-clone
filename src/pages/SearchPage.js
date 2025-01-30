import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import { useStateValue } from '../contextAPI/StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import { Response } from '../response'
import '../styles/SearchPage.css'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  // const { data } = useGoogleSearch(term)
  // mock API call
  const data = Response;

  console.log(data)

  return (
    <div className='searchPage'>
      <div className="searchPage__header">
        <Link to="/">
          <img className='searchPage__logo' src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg" alt="" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons/>
        </div>
      </div>
      
      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage
