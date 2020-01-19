import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="container-fluid text-white">
            <div className="row justify-content-between pt-4 pb-3">
                <div className="col-5">
                    <p>
                    Please get in touch if you are interested in working together, we are open
                    for business.
                    </p>
                </div>
                <div className="col-3">
                    <p>
                        WRITE: hello@soke.studio<br />
                        CALL: (0047)92447770
                    </p>
                </div>
                <div className="col-2 text-right">
                    <ul>
                        <li><a className="text-white" href="http://instagram.com/sokestudio" target="_blank">Instagram</a></li>
                        <li><a className="text-white" href="https://facebook.com/sokestudio/" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;