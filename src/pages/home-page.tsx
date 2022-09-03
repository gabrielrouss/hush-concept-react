import { useEffect, useState } from 'react';
import { AiFillApple } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import '../styles/pages/homePage.scss'
import 'aos/dist/aos.css';

import logo from '../images/logo.png';
import logoBlack from '../images/logo-black.png';
import print01 from '../images/print-01.png';
import reactLogo from '../images/react-logo.png';
import microsoftLogo from '../images/microsoft-logo.png';
import teslaLogo from '../images/tesla_logo.png';
import nvidiaLogo from '../images/nvidia_logo_horizontal.png';
import feature01 from '../images/feature01.png';
import feature02 from '../images/feature02.png';
import feature03 from '../images/feature03.png';
import imageGroup01 from '../images/image-group-01.png';
import imageGroup02 from '../images/image-group-02.png';

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    AOS.init({duration: 1200});
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.scrollY])

  return (
    <div id="page-home">

      <div className="initial-content bg-primary">
        <header>
          <nav>
            <img src={logo} alt="Hush logo" />
            <Link to="/contato">Contato</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/contato">Contato</Link>
          </nav>

          <button>Create Account</button>
        </header>

        <div className="banner-content">
          <h1>Connect with<br/>your team</h1>
          <p>Hush is a messaging app for your team that will helps you to connect with everyone in a easy and comfortable way posssible</p>

          <button><AiFillApple /> Download for MacOS</button>
        </div>

      </div>

      <div className="print-product">
        <img src={print01} alt="Image print of product" style={{ transform: `translateY(${offsetY*0.05}px)`}} id="imageScroll"/>
      </div>

      <div className="partners-section" data-aos="slide-up">
        <p>Empresas que parceiras:</p>
        <div className="partners-container">
          <img src={reactLogo} alt="Logo React"/>
          <img src={microsoftLogo} alt="Logo React"/>
          <img src={teslaLogo} alt="Logo React"/>
          <img src={nvidiaLogo} alt="Logo React"/>
        </div>
      </div>

      <div className="features-section" data-aos="slide-up">
        <div className="features-info" data-aos="slide-up">
          <h2>Some of our features that will help you</h2>
          <p>With cube, you can build your app or website faster than before. Featured with an awesome things inside that will help you in your design process</p>
        </div>

        <div className="features-elements" data-aos="slide-up">
          <div className="feature-item">
            <img src={feature01} alt="" />
            <h3>Easy Communication</h3>
            <p>Easy and simple way to communicate with your team and friends, build with awesome features with it</p>
          </div>
          <div className="feature-item">
            <img src={feature02} alt="" />
            <h3>Community Support</h3>
            <p>A creative and quick way to get feedbacks and support in your team or community, just send the work and the rest will follow</p>
          </div>
          <div className="feature-item">
            <img src={feature03} alt="" />
            <h3>Easy Communication</h3>
            <p>Discover new channels you interest in, meet with new people around the world and make more connections</p>
          </div>
        </div>
      </div>

      <div className='extra-info-section bg-primary'>
        <div className='about-01 container' data-aos="slide-up">
          <div className="image">
            <img src={imageGroup01} alt="Image Group 01"/>
          </div>
          <div className='text'>
            <h2>Easy and effortless way to connect with your team</h2>
            <p>With hush you can easliy connect with your team in a different fields, you can create, manage, and edit what ever you want inside the channel. Create as many as you want</p>
            <button>Learn more about Hush</button>
          </div>
        </div>

        <div className='about-02 container' data-aos="slide-up">
          <div className="text">
            <h2>Tons of supportive community you can discover</h2>
            <p>Search any type and field of community you want, by searching on the search page you can discover tons of supportive community that will help you with your work.</p>
            <button>Explore the community</button>
          </div>
          <div className="image">
            <img src={imageGroup02} alt="Image Group 02"/>
          </div>
        </div>
      </div>

      <div className="join-section" data-aos="slide-up" data-aos-duration="600">
        <div>
          <h2>Join thousands creative teams on hush</h2>
          <p>With cube, you can build your app or website faster than before. Featured with an awesome things inside that will help you in your design process</p>
          <button><AiFillApple /> Download for MacOS</button>
        </div>
      </div>

      <footer className='footer'>
        <div className="grid-area">
          <div className="business">
            <img src={logoBlack} alt="Logo" />
            <p>A team messaging app for everyone to connect with their team.</p>
          </div>

          <div className="product footer-links">
            <h4>Product</h4>
            <Link to="/">Update</Link>
            <Link to="/">Download</Link>
            <Link to="/">Beta test</Link>
            <Link to="/">Pricing product</Link>
          </div>

          <div className="support footer-links">
            <h4>Support</h4>
            <Link to="/">Help center</Link>
            <Link to="/">Account information</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact us</Link>
          </div>

          <div className="help footer-links">
            <h4>Help and Solution</h4>
            <Link to="/">Talk to support</Link>
            <Link to="/">Support docs</Link>
            <Link to="/">System status</Link>
            <Link to="/">Covid responde</Link>
          </div>
        </div>

        <div className="final-infos">
          <p>© 2021 Hush Inc. Copyright and All rights reserved.</p>
          <p>Terms and Conditions · Privacy Policy</p>
        </div>

      </footer>
    </div>
  )
}

export default HomePage;