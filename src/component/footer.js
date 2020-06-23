import React from "react"
import "./../css/footer.css"
import {Link } from "react-router-dom";
import Widget from "./footerWidget";
import Subscribe from "./subscribe";
const Footer =({title})=>{
    return(
        <footer>
            <div className="footer-top">
                <div className="sub">
                    <h5>Sign up to our newsletter for updates</h5>
                    <Subscribe/>
                </div>
            </div>
            <div className="footer-inner">
                <div className="footer-col">
                    <h4>{title}</h4>
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
                    <Widget title="Links">
                        <ul>
                            <li>
                                <Link to="/">How to</Link>
                            </li>
                            <li>
                                <Link to="/">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/">Accounts</Link>
                            </li>
                            <li>
                                <Link to="/">Developers</Link>
                            </li>
                        </ul>
                    </Widget>
                </div>
                <div className="footer-col">
                    <Widget title="Company">
                        <ul>
                            <li>
                                <Link to="/">Terms</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/about us">About us</Link>
                            </li>
                            <li>
                                <Link to="/">Contact us</Link>
                            </li>
                        </ul>
                    </Widget>
                </div>
                <div className="footer-col">
                    <Widget title="Resources">
                        <ul>
                            <li>
                                <Link to="/">Support</Link>
                            </li>
                            <li>
                                <Link to="/">Updates</Link>
                            </li>
                            <li>
                                <Link to="/">Newsletter</Link>
                            </li>
                            <li>
                                <Link to="/">Developer</Link>
                            </li>
                        </ul>
                    </Widget>
                </div>
                <div className="footer-col">
                    <Widget title="Contact">
                        <ul>
                            <li>
                                <Link to="/">admin@trackbiz.com</Link>
                            </li>
                            <li>
                                <Link to="/">Ikeja, Lagos, Nigeria</Link>
                            </li>
                        </ul>
                    </Widget>
                </div>
            </div>
        </footer>
    )
}
export default Footer;