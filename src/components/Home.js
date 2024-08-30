import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfigexternal'; // Adjust path if necessary
import '../App.css';

function Home() {
  const { instance } = useMsal();

  const handleLogin = async () => {
    console.log('handleLogin called');
    if (!instance) {
      console.error('MSAL instance is not initialized');
      return;
    }
    try {
      const loginResponse = await instance.loginPopup(loginRequest);
      console.log('id_token acquired at: ' + new Date().toString());
      console.log(loginResponse);

      // Redirect to CRForm page after successful login
      window.location.href = '/CRForm'; // Ensure this path is correct
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-page-container">
      <div className="header">
        <div className="header-content">
          <img src="https://ontariogov-my.sharepoint.com/:i:/r/personal/defne_yildirim_ontario_ca/Documents/Desktop/classification%20request%20form/ON_REV_LOGO_RED_RGB.PNG?csf=1&web=1&e=3ze3Xa" alt="Ontario Logo" className="logo" />
          <div className="header-text">
            <h2>Treasury Board Secretariat</h2>
            <h2>Job Evaluation Initiatives Branch</h2>
          </div>
        </div>
      </div>
      <div className="instructions">
        <h1>Welcome to the Classification Request Form</h1>
        <p>
        Job Evaluation Initiatives Branch is the custodian of the OPS classification system and has the delegated authority to classify all positions up to and including Assistant Deputy Minister level. If you are a ministry partner who would like to submit a classification request or a consultation request, please click the blue button on the left hand side, Classification and Consultation Request.
        </p>
      </div>
      <div className="button-container">
        <button className="button primary" onClick={handleLogin}>Classification and Consultation Request</button>
        <button className="button primary">JE Specialist Access</button>
      </div>
    </div>
  );
}

export default Home;
