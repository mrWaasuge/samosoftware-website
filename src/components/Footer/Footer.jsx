import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
        <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.4 3 11 4.5 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
    </svg>
)

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
        <path d="M14.5 3c.4 2.4 1.8 4 4.2 4.3v2.6c-1.5 0-2.8-.5-4.1-1.4v6.7c0 3.3-2.6 5.8-6 5.8S2.6 18.5 2.6 15.2c0-3.2 2.5-5.7 5.8-5.8v2.8c-1.6.1-2.9 1.4-2.9 3 0 1.7 1.4 3 3.1 3s3.1-1.3 3.1-3V3h2.8z" />
    </svg>
)

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col footer-brand">
                        <img src="/assets/logo.png" alt="SamoSoftware" className="footer-logo" />
                        <p>Building reliable digital solutions, scalable enterprise cloud systems, and modern SaaS products.</p>
                        <p className="footer-place">
                            <MapPin size={16} aria-hidden="true" />
                            Mogadishu, Somalia
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/subscriptions">Software & Plans</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Software & Systems</h4>
                        <ul>
                            <li><Link to="/subscriptions">SamoFEMS</Link></li>
                            <li><Link to="/subscriptions">SMC (School System)</Link></li>
                            <li><Link to="/subscriptions">SamoBiz POS</Link></li>
                            <li><Link to="/subscriptions">Homas (Hospital System)</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get In Touch</h4>
                        <ul className="footer-contact">
                            <li>
                                <a href="https://wa.me/252613502123" target="_blank" rel="noopener noreferrer">
                                    WhatsApp: +252 61 350 2123
                                </a>
                            </li>
                            <li>
                                <a href="mailto:samosoftware1@gmail.com">
                                    <Mail size={16} aria-hidden="true" />
                                    samosoftware1@gmail.com
                                </a>
                            </li>
                            <li>
                                <span>
                                    <MapPin size={16} aria-hidden="true" />
                                    Mogadishu, Somalia
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="footer-social">
                            <a
                                href="https://www.facebook.com/share/1DVhQYVfY9/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="social-link"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="https://www.tiktok.com/@samosoftskill?_r=1&_t=ZS-9ASkKFEbXue"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="social-link"
                            >
                                <TikTokIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2026 SamoSoftware. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
