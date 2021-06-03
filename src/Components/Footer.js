import React from 'react';

const Footer = () => {
    return(
        <footer className="container-fluid text-white">
            <div className="row justify-content-between pt-4 pb-3">
                <div className="col-7 col-md-4 col-lg-5">
                    <p>
                    Please get in touch if you are interested in working together, we are open
                    for business.
                    </p>
                </div>
                <div className="col-6 col-md-4">
                    <p>
                        WRITE: hello@soke.studio<br />
                        CALL: (0047)92447770
                    </p>
                </div>
                <div className="col-5 col-md-2 text-right">
                    <ul>
                        <li><a className="text-white" href="http://instagram.com/sokestudio" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a className="text-white" href="https://facebook.com/sokestudio/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;