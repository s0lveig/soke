import React from 'react';
import { Link } from 'react-router-dom';

const Design = () => {

    window.scrollTo(0, 0);
    
    return(
        <div id="design-container">

            <div className="top-area text-white p-5">

                <div className="row justify-content-start">
                    <div className="col-9 col-sm-7">
                        <img className="img-fluid" src="./images/webdev/eyec/eyec_10.png" alt="Design case" />
                        <p><small>Mobile responsive web design for EyeC Mag <Link className="text-reset case-link" to="/cases/eyec">View case study+</Link></small></p>
                    </div>
                    <div className="col-11 col-sm-5">
                        <img className="img-fluid" src="./images/design/aoi_6.jpg" alt="Design case" />
                        <p><small>Packaging design for Aoi Project <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 mb-5 pt-5 pb-5">
                    <h4 className="col-11  col-sm-3">
                        Design &amp; Creative direction
                    </h4>
                    <p className="col-11 col-sm-6">
                        We offer a range of design services, from a logo to complete branding packages.
                        We specialize in type design and creative direction.
                    </p>
                </div>

            </div>

            <div className="container-fluid pb-5">

                <div className="row justify-content-around mt-5">
                    <div className="col-11 col-sm-5 align-self-start pb-5">
                        <img className="bg-aoi img-fluid" src="./images/design/aoi_gif.gif" alt="Design case" />
                        <p><small>Logo &amp; custom typeface for Aoi Project <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                    <div className="col-11 col-sm-5 align-self-end">
                        <img className="img-fluid" src="./images/design/moldxaoi.jpg" alt="Design case" />
                        <p><small>Hangtags &amp; packaging consept for Mold x Aoi</small></p>
                    </div>
                </div>

                <div className="row justify-content-around mb-5">
                    <div className="col-11 col-sm-5 align-self-top">
                        <img className="img-fluid" src="./images/design/aoi_10.jpg" alt="Design case" />
                        <p><small>Recycled paper hangtag and cotton label for Aoi.</small></p>
                    </div>
                    <div className="col-11 col-sm-4 align-self-center pt-5">
                        <img className="img-fluid" src="./images/design/eyec_eg.png" alt="Design case" />
                        <p><small>Website / online publication for Eye_C <Link className="text-reset case-link" to="/cases/eyec">View case study+</Link></small></p>
                    </div>
                </div>

                <div className="row justify-content-around mt-5 mb-5">
                    <div className="col-11 col-sm-3 m-auto">
                        <img className="img-fluid" src="./images/design/aoi_7.jpg" alt="Design case" />
                        <p><small>Packaging design for Aoi <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                    <div className="col-11 col-sm-5">
                        <img className="img-fluid" src="./images/design/aoi_font.png" alt="Design case" />
                        <p><small>Custom typeface for Aoi <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;