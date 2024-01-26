import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import './footer.css';

function Footer(){
    return(
        <div className="footer-section">
            <div className='socialmedia-link'>
                <FaFacebookF className="icon"/>
                <BsInstagram className="icon"/>
                <TiSocialTwitter className="icon text-2xl"/>
                <FaYoutube className="icon"/>
            </div>
            <div className="support-links">
                <div className="link-1">
                    <ul>
                        <li className="link">Auto Description</li>
                        <li className="link">Investor Relations</li>
                        <li className="link">legal Notices</li>
                    </ul>
                </div>
                <div className="link-2">
                    <ul>
                        <li className="link">Help Centre</li>
                        <li className="link">Jobs</li>
                        <li className="link">Cookie Preferences</li>
                    </ul>
                </div>
                <div className="link-3">
                    <ul>
                        <li className="link">Gift Cards</li>
                        <li className="link">Term of Use</li>
                        <li className="link">Corporate Information</li>
                    </ul>
                </div>
                <div className="link-4">
                    <ul>
                        <li className="link">Media Centre</li>
                        <li className="link">Privacy</li>
                        <li className="link">Contacts</li>
                    </ul>
                </div>
            </div>
            <div>
                <button className="footer-btn">Service Code</button>
            </div>
            <p className="copyright-tag">&copy; 1997 - {new Date().getFullYear()} Netflix, inc.</p>
            
        </div>
    )
}

export default Footer;