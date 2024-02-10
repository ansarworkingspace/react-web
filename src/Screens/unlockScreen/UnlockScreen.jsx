
import React from 'react';
import Select from 'react-select';
import { countries } from 'countries-list';
import './UnlockScreen.css';
import loginImage from '/celeb.png';

const countryOptions = Object.keys(countries).map((code) => ({
  value: code,
  label: `${code} ${countries[code].name}`,
}));

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: '14rem',
    height: '3rem',
    borderRadius: '3rem',
    border: '2px solid #d6d6d6',

    '@media (max-width: 768px)': {
      width: '15rem',
     
    },

  }),
};

const UnlockScreen = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  return (
    <div className='unLockDiv'>
      <div className="unlockLeft">
        <form className="unlockForm">
          <h2>Unlock Exclusive Benefits</h2>
          <h4 className='codeHead'>Enter Country Code and Number</h4>
          <div className="twoHorizontalInput">
            <Select
              id="countryCode"
              options={countryOptions}
              value={selectedCountry}
              onChange={handleCountryChange}
              styles={customStyles}
              placeholder=""
            />

            <input type="text" id="secondInput" placeholder='Enter your number' />
          </div>

          <div className="twoVerticalInputs">
            <label htmlFor="thirdInput">Name </label>
            <input type="text" id="thirdInput" placeholder='Enter your Name' />

            <label htmlFor="fourthInput">Email (<span>Option</span>)</label>
            <input type="text" id="fourthInput" placeholder='Enter your Email' />
          </div>

          <button>Continue</button>

          <h5>Get Ready To Receive a secret code OTP on your Phone</h5>
        </form>
      </div>

      <div className="unloclRight">
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
}

export default UnlockScreen;
