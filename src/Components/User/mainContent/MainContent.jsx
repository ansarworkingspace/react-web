
// import React, { useState } from 'react';
// import './MainContent.css';
// import CommunityLogo from '/membership-preview.png';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const MainContent = () => {


// const navigate = useNavigate()

//     const initialIndex = 0;
//   const caroselBoxData = [
//     { image: '/img1.jpg', nameH3: 'Lower Interest Rates' },
//     { image: '/img2.jpg', nameH3: 'Interest Free Payment' },
//     { image: '/img3.jpg', nameH3: 'Discount On Material' },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(initialIndex);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + caroselBoxData.length) % caroselBoxData.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % caroselBoxData.length);
//   };

//   const reorderedBoxData = [
//     caroselBoxData[(currentIndex + 2) % caroselBoxData.length],
//     caroselBoxData[currentIndex],
//     caroselBoxData[(currentIndex + 1) % caroselBoxData.length],
//   ];


//   const unlock =()=>{
//     navigate('/unlock')
//   }



//   return (
//     <div className='mainContentBody'>
//       <div className="left">
//         <div className="leftHeading">
//           <h2>New Arrival</h2>
//           <h3>Join Today</h3>
//           <h4>─</h4>
//         </div>
//         <div className="communityLogo">
//           <img src={CommunityLogo} alt="" />
//           <button>Join now</button>
//         </div>
//       </div>
//       <div className="right">
//         <div className="top">
//           <h3>Unlock Premium Features now</h3>
//           <h4>───  ❉  ───</h4>
//         </div>
//         <div className="carosel">
//           <button className='arrow' onClick={handlePrev}>
//             <ArrowBackIcon />
//           </button>
//           {reorderedBoxData.map((item, index) => (
//           <div key={index} className={`caroselBox ${index === 1 ? 'active' : ''}`}>
//             <div className='caroselImg'>
//               <img src={item.image} alt={item.nameH3} />
//             </div>
//             <h3>{item.nameH3}</h3>
//           </div>
//         ))}
//           <button className='arrow' onClick={handleNext}>
//             <ArrowForwardIcon />
//           </button>
//         </div>
//         <div className="bottom">
//           <button className='btnUnlock' onClick={unlock}>UNLOCK NOW</button>
//           <button className='btnDetails'>DETAILS</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContent;




import React, { useState } from 'react';
import './MainContent.css';
import CommunityLogo from '/membership-preview.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {


const navigate = useNavigate()

    const initialIndex = 0;
  const caroselBoxData = [
    { image: '/img1.jpg', nameH3: 'Lower Interest Rates' },
    { image: '/img2.jpg', nameH3: 'Interest Free Payment' },
    { image: '/img3.jpg', nameH3: 'Discount On Material' },
  ];

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caroselBoxData.length) % caroselBoxData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caroselBoxData.length);
  };

  const reorderedBoxData = [
    caroselBoxData[(currentIndex + 2) % caroselBoxData.length],
    caroselBoxData[currentIndex],
    caroselBoxData[(currentIndex + 1) % caroselBoxData.length],
  ];


  const unlock =()=>{
    navigate('/unlock')
  }



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
        <div className="carosel">
          <button className='arrow' onClick={handlePrev}>
            <ArrowBackIcon />
          </button>
          {reorderedBoxData.map((item, index) => (
          <div key={index} className={`caroselBox ${index === 1 ? 'active' : ''}`}>
            <div className='caroselImg'>
              <img src={item.image} alt={item.nameH3} />
            </div>
            <h3>{item.nameH3}</h3>
          </div>
        ))}
          <button className='arrow' onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </div>
        <div className="bottom">
          <button className='btnUnlock' onClick={unlock}>UNLOCK NOW</button>
          <button className='btnDetails'>DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
