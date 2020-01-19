import React from 'react';
import { Link } from 'react-router-dom';

const Design = () => {
    return(
        <div id="design-container">

            <div className="top-area text-white p-5">

                <div className="row justify-content-center">
                    <div className="col-7">
                        <img className="img-fluid" src="./images/webdev/eyec/eyec_10.png" />
                        <p><small>Mobile responsive web design for EyeC Mag <Link className="text-reset case-link" to="/cases/eyec">View case study+</Link></small></p>
                    </div>
                    <div className="col-5">
                        <img className="img-fluid" src="./images/design/aoi_6.jpg" />
                        <p><small>Packaging design for Aoi Project <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 mb-5 pt-5 pb-5">
                    <h4 className="col-3">
                        Design &amp; Creative direction
                    </h4>
                    <p className="col-6">We offer a range of photography services with art direction included – specializing in still life photography.
                        
                        You can get a glimpse of our work in this gallery, don't hesitate to contact us with any special enquiries.
                    </p>
                </div>

            </div>

            <div className="container-fluid pb-5">

                <div className="row justify-content-around mt-5">
                    <div className="col-5 align-self-start pb-5">
                        <img className="bg-aoi img-fluid" src="./images/design/aoi_gif.gif" />
                        <p><small>Logo &amp; custom typeface for Aoi Project <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                    <div className="col-5 align-self-end">
                        <img className="img-fluid" src="./images/design/moldxaoi.jpg" />
                        <p><small>Hangtags &amp; packaging consept for Mold x Aoi</small></p>
                    </div>
                </div>

                <div className="row justify-content-around mb-5">
                    <div className="col-5 align-self-top">
                        <div className="col-10 align-self-end m-auto pt-5">
                        <img className="img-fluid" src="./images/design/aoi_10.jpg" />
                        <p><small>Recycled paper hangtag and cotton label for Aoi.</small></p>
                        </div>
                    </div>
                    <div className="col-4 align-self-center pt-5">
                        <img className="img-fluid" src="./images/design/eyec_eg.png" />
                        <p><small>Website / online publication for Eye_C <Link className="text-reset case-link" to="/cases/eyec">View case study+</Link></small></p>
                    </div>
                </div>

                <div className="row justify-content-around mt-5 mb-5">
                    <div className="col-3 m-auto">
                        <img className="img-fluid" src="./images/design/aoi_7.jpg" />
                        <p><small>Packaging design for Aoi <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                    <div className="col-5">
                        <img className="img-fluid" src="./images/design/aoi_font.png" />
                        <p><small>Custom typeface for Aoi <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;