import { useNavigate } from 'react-router-dom';
import './Header.css';
import logoImage from '/real-estate-house.png'; // Import the image file

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logoImage} alt="Company Logo" />
      </div>
      <div className="headerName">
        <h2>XYZ SYSTEMS LLP.</h2>
      </div>
    </div>
  );
};

export default Header;
