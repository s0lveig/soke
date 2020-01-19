import React from 'react';
import { Link } from 'react-router-dom';

const Development = () => {
    return(
        <div id="development-container">

            <div className="top-area text-white p-5">

                <div className="row justify-content-center mt-5">
                    <div className="col-7">
                            <video width="100%" height="auto" autoplay="autoplay" loop>
                                <source src="./images/webdev/gtf/video/GTFvid.mp4" type="video/mp4" />
                                You are using an unsupported browser.
                            </video> 
                        <p><small>Typetester for GTF <Link className="text-reset case-link" to="/cases/gtf">View case study+</Link></small></p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 mb-5 pt-5 pb-5">
                    <h4 className="col-3">
                        Web design &amp; Development
                    </h4>
                    <p className="col-6">We offer a range of photography services with art direction included – specializing in still life photography.
                        
                        You can get a glimpse of our work in this gallery, don't hesitate to contact us with any special enquiries.
                    </p>
                </div>

            </div>

            <div className="container-fluid pb-5">

                <div className="row justify-content-center mt-5 pb-5">
                    <div className="col-6">
                        <img className="img-fluid" src="./images/webdev/aoi/aoi_web_2.png" />
                        </div>
                    <div className="col-5 align-self-end">
                        <img className="img-fluid" src="./images/webdev/aoi/aoi_web_7.png" />
                        <p><small>Website &amp; digital shopping experience for Aoi Project.<br />
                        <Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></small></p>
                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <div className="col-8">
                        <div className="anim-container">
                            <img className="img-anim-1 img-fluid" src="./images/webdev/gtf/gtf_1.png" />
                            <img className="img-anim-2 img-fluid" src="./images/webdev/gtf/gtf_2.png" />
                        </div>
                        <p><small>Web design &amp; development for Good Type Foundry <Link className="text-reset case-link" to="/cases/gtf">View case study+</Link></small></p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-6">
                        <video width="100%" height="auto" autoplay="autoplay" loop>
                                <source src="./images/webdev/eyec/video/eyec_vid.mp4" type="video/mp4" />
                                You are using an unsupported browser.
                        </video> 
                        <p><small>Web design &amp; development for online magazine Eye_C<br />
                        <Link className="text-reset case-link" to="/cases/eyec">View case study+</Link></small></p>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid" src="./images/webdev/eyec/eyec_10.png" />
                    </div>
                </div>

                <div className="row justify-content-center mt-1">
                    
                    
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-7">
                        <video width="100%" height="auto" autoplay="autoplay" loop>
                            <source src="./images/webdev/palookaville/video/palooka_vid.mp4" type="video/mp4" />
                            You are using an unsupported browser.
                        </video> 
                        <p><small>Web site for photographers agency Palookaville</small></p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-5">
                    <img className="img-fluid" src="./images/webdev/palookaville/palookaville_1.png" />
                    </div>
                    <div className="col-5">
                        <img className="img-fluid" src="./images/webdev/palookaville/palookaville_5.png" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Development;