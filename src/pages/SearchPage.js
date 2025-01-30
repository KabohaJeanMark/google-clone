import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import RoomIcon from '@mui/icons-material/Room';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">news</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
              
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage
