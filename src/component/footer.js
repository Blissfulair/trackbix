import React from "react"
import "./../css/footer.css"
import {Link } from "react-router-dom";
import Widget from "./footerWidget";
import Subscribe from "./subscribe";
const Footer =()=>{
    return(
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 260">
            <path id="FooterImg" d="M0-174.023S479.431-259.677,959.431-259.677,1920-174.023,1920-174.023V251H0Z"/>
            </svg>
            <div className="footer-inner">
                <div className="footer-col">
                    <h4>Trackbiz</h4>
                    <p>Your business within your control</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <span className="icon-facebook"></span>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <span className="icon-instagram"></span>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <span className="icon-twitter"></span>
                        </a>
                    </div>
                    <p>All rights reserved &copy; TrackBiz {new Date().getFullYear()}</p>
                </div>
                <div className="footer-col">
                    <Widget title="Plartform">
                        <ul>
                            <li>
                                <Link to="/features">How to</Link>
                            </li>
                            <li>
                                <Link to="/features">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/features">Accounts</Link>
                            </li>
                            <li>
                                <Link to="/features">Developers</Link>
                            </li>
                        </ul>
                    </Widget>
                </div>
                <div className="footer-col">
                    <Widget title="Company">
                        <ul>
                            <li>
                                <Link to="/features">Terms</Link>
                            </li>
                            <li>
                                <Link to="/features">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/about us">About us</Link>
                            </li>
                            <li>
                                <Link to="/features">Contact us</Link>
                            </li>
                        </ul>
                    </Widget>
                </div>
                <div className="footer-col">
                    <Widget title="Resources">
                        <ul>
                            <li>
                                <Link to="/features">Support</Link>
                            </li>
                            <li>
                                <Link to="/features">Updates</Link>
                            </li>
                            <li>
                                <Link to="/features">Newsletter</Link>
                            </li>
                            <li>
                                <Link to="/features">Developer</Link>
                            </li>
                        </ul>
                    </Widget>
                </div>
                <div className="footer-col">
                    <div className="sub">
                        <h5>Sign up to our newsletter for updates</h5>
                        <Subscribe/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;