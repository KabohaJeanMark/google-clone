import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/* <Icon /> */}
          <AppsIcon />
          {/* <Avatar /> */}
          <AccountCircleIcon/>
        </div>
      </div>
      <div className="home__body">

      </div>
    </div>
  )
}

export default Home
