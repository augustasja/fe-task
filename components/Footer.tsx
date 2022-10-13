import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="footer-info">
                    <div>
                        <Link className="footer-logo" href="/">
                            <Image src="/assets/logo.svg" alt="ratepunk-logo" width={125} height={32} layout="fixed" />
                        </Link>
                        <p className="footer-description">Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
                    </div>
                    <p className="footer-copyright">© 2021 Ratepunk. All Rights Reserved.</p>
                </div>
                <div className="footer-links">
                    <div>
                        <p className="footer-title">Quick Links</p>
                        <ul>
                            <li>
                                <Link href="">Price Comparison</Link>
                            </li>
                            <li>
                                <a target="_blank" href="">Chrome Extension</a>
                            </li>
                            <li>
                                <Link href="">How It Works</Link>
                            </li>
                            <li>
                                <Link href="">Ratepunk Blog</Link>
                            </li>
                            <li>
                                <Link href="">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-contact-social">
                    <div className="footer-contact">
                        <p className="footer-title">Contact</p>
                        <a className="footer-contact-link" target="_blank" href="">
                            <Image src="/assets/email-footer.svg" alt="ratepunk-email" width={17} height={13} layout="fixed" />
                            <span>hi@ratepunk.com</span>
                        </a>
                    </div>
                    <div className="footer-social">
                        <p className="footer-title">Social</p>
                        <a className="social-button" target="_blank" href="">
                            <Image src="/assets/instagram.svg" alt="ratepunk-instagram" width={16} height={16} layout="fixed" />
                        </a>
                        <a className="social-button" target="_blank" href="">
                            <Image src="/assets/facebook.svg" alt="ratepunk-instagram" width={16} height={16} layout="fixed" />
                        </a>
                        <a className="social-button" target="_blank" href="">
                            <Image src="/assets/linkedin.svg" alt="ratepunk-instagram" width={16} height={16} layout="fixed" />
                        </a>
                        <a className="social-button" target="_blank" href="">
                            <Image src="/assets/twitter.svg" alt="ratepunk-instagram" width={16} height={16} layout="fixed" />
                        </a>
                        <a className="social-button" target="_blank" href="">
                            <Image src="/assets/tiktok.svg" alt="ratepunk-instagram" width={16} height={16} layout="fixed" />
                        </a>
                    </div>
                </div>
            </div>
                <p className="footer-copyright-mobile">© 2021 Ratepunk. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;