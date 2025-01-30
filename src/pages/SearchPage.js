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
  const { data } = useGoogleSearch(term)
  // Mock API call
  // const data = Response;

  return (
    <div className='searchPage'>
      <div className="searchPage__header">
        <div className="searchPage__headerBody">
        <Link to="/">
          <img className='searchPage__logo' src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg" alt="" />
        </Link>
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
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} alt="" />
                )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}

export default SearchPage
