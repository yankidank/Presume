import React from 'react';
import NavBar from '../NavBar';

function MenuLogin() {
  const domain = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001' : '';
  return (
    <div>
      <NavBar />
      <div>
        <ul className="menuNav">
          <li>
            <a href="/" className="button btn-home-login">
              Home
            </a>
          </li>
          <li>
            <a href={`${domain}/auth/github`} className="button btn-github">
              <div className="btn-logo">
                <img src="/assets/img/icon-github.png" alt="GitHub"></img>
              </div>
              <div className="btn-title">Login with GitHub</div>
            </a>
          </li>
          <li>
            <a href={`${domain}/auth/linkedin`} className="button btn-linkedin">
              <div className="btn-logo">
                <img src="/assets/img/icon-linkedin.png" alt="LinkedIn"></img>
              </div>
              <div className="btn-title">Login with LinkedIn</div>
            </a>
          </li>
          <li>
            <a href={`${domain}/auth/google`} className="button btn-google">
              <div className="btn-logo">
                <img src="/assets/img/icon-google.png" alt="Google"></img>
              </div>
              <div className="btn-title">Login with Google</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuLogin;
