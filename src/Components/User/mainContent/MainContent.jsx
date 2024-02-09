import React from 'react'
import './MainContent.css'
import CommunityLogo from '/membership-preview.png'

const MainContent = () => {
  return (
    <div className='mainContentBody'>
      <div className="left">
        <div className="leftHeading">
            <h2>New Arrival</h2>
            <h3>Join Today</h3>
            <h4>─</h4>
        </div>
        <div className="communityLogo">
           <img src={CommunityLogo} alt="" />
           <button>Join now</button>
        </div>
      </div>
      <div className="right">
        <div className="top">
            <h3>Unlock Premium Features now</h3>
            <h4>───  ❉  ───</h4> 
        </div>
        <div className="carosel"></div>
        <div className="bottom">
            <button className='btnUnlock'>UNLOCK NOW</button>
            <button className='btnDetails'>DETAILS</button>
        </div>
      </div>
    </div>
  )
}

export default MainContent
