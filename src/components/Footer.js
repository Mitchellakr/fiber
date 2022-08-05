import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content grid">
                    <div className="footer-fiber flex">
                        <h3>Fiber</h3>
                        <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                        <p>Made with love in the Netherlands.</p>
                    </div>
                    <div className="footer-map flex">
                        <h3>Sitemap</h3>
                        <ul className="flex">
                            <li><a href="#">Homepage</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Features</a></li>
                        </ul>
                    </div>
                    <div className="footer-map flex">
                        <h3>Resources</h3>
                        <ul className="flex">
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-map flex">
                        <h3>Company</h3>
                        <ul className="flex">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-map flex">
                        <h3>Portfolio</h3>
                        <ul className="flex">
                            <li><a href="#">Sarah Andrews</a></li>
                            <li><a href="#">Mathew Huggins</a></li>
                            <li><a href="#">Janice Dave</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}