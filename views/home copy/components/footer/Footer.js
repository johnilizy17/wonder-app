import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './footer.css';
import Card from '@material-ui/core/Card';
import Airtel from '../asset/logo/Airtel.jpg';
import DSTV from '../asset/logo/DSTV.jpg';
import GLO from '../asset/logo/GLO.jpg';
import MTN from '../asset/logo/MTN.jpg';
import Electricity from '../asset/logo/Electricity.jpg';
import PHCN from '../asset/logo/PHCN.jpg';
import Startimes from '../asset/logo/Startimes.jpg';
import Gotv from '../asset/logo/Gotv.jpg';
import mobile from '../asset/logo/9mobile.jpg';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer__container">
      <div className="footer__logo">
        <div className="footer">
          <img src={Airtel} alt="Airtel" />
          <img src={DSTV} alt="DSTV" />
          <img src={GLO} alt="GLO" />
          <img src={MTN} alt="MTN" />
          <img src={Electricity} alt="Electricity" />
          <img src={PHCN} alt="PHCN" />
          <img src={Startimes} alt="Startimes" />
          <img src={Gotv} alt="MTN" />
          <img src={mobile} alt="moblie" />
        </div>
        <div className="footer">
          <Button onClick={() => { navigate.push('/register'); }}>Get started</Button>
        </div>
      </div>
      <Card
        variant="outlined"
        style={{
          marginTop: '20px', backgroundColor: 'black', width: '100vw', color: 'white'
        }}
      >
        <div className="footer__info">
          <h5>CONTACT INFO</h5>
          <h6>
            ADDRESS:
            <br />
            10 taki Road, Ogbomoso, Oyo, Nigeria
          </h6>
          <h6>
            PHONE/WhatsApp:
            <br />
            09131923695
          </h6>
          <h6>
            EMAIL:
            <br />
            johnabrahamtosin@gmail.com
          </h6>
          <h6>
            OFFICE DAYS/HOURS:
            <br />
            Mon - Sat / 9:00 AM - 5:00 PM
          </h6>
        </div>
      </Card>
    </div>
  );
}

export default Footer;
