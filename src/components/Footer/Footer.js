import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <hr className="divider-d" />
      <footer className="footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="copyright font-alt">&copy; 2020&nbsp;<a href="/">Erika Miwa</a>, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;