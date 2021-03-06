import {ReactComponent as GitHubIcon} from 'assest/img/github.svg';
import './style.css';

function Navbar(){

    return(
        <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSmovie</h1>
          <a href="https://github.com/devsuperior">
          <div className='dsmovie-contact-container'>
            <GitHubIcon />
            <p className='dsmovie-contact-link'>/devsuperior</p>
          </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;