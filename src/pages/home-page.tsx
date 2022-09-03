
import { AiFillApple } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import '../styles/pages/homePage.scss'

import logo from '../images/logo.png';
import print01 from '../images/print-01.png';

function HomePage() {
  return (
    <div id="page-home">

      <div className="initial-content">
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
        <img src={print01} alt="Image print of product" />
      </div>

    </div>
  )
}

export default HomePage;