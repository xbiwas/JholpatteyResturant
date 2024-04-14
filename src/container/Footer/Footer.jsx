import { FiFacebook,  FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';



const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Baneshowr 10, Devkota Sadak</p>
        <p className="p__opensans">+977 9761767215</p>
        <p className="p__opensans">+977 9702831598</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Find Your Own Taste.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon'/>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/profile.php?id=100063588315908" rel='noreferrer' target='_blank'><FiFacebook /></a>
          <a href="https://www.instagram.com/jholpattey_/" target='_blank' rel='noreferrer'><FiInstagram /></a>          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday-Thursday:</p>
        <p className="p__opensans">08:00 am - 11:30 pm</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">08:00 am - 01:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Jholpattey. All Rights reserved.</p>
      <p className="p__opensans">Developed by: <span style={{fontWeight:'bold', color:'#DCCA87'}}><a href="https://biwasbhandari.com.np" rel='noreferrer' target='_blank'>Biwas Bhandari</a></span></p>
    </div>

  </div>
);

export default Footer;