import React from 'react';
import About from './About';
import Projects from './Projects';
import { Route, Link } from 'react-router-dom';

const Home = () => {

    window.scrollTo(0, 0);
    
    return(
        <div>
        <div id="home-container">

            <div className="container-fluid">

                <div className="top-area-home padded-area text-white row justify-content-center">
                    <h1 className="col-10 mt-5 mb-5 pt-5">
                        We are a full service design studio dedicated to helping you from start to
                        finish with your project. We value sustainable solutions &amp; challenging design.
                    </h1>
                    <div id="spinner">
                        <p className="mb-5 pb-5"><small className="uppersmalls">Strategy <span className="p-4">&rarr;</span> Creative direction <span className="p-4">&rarr;</span>
                        Photography <span className="p-4">&rarr;</span> Design <span className="p-4">&rarr;</span> Web development</small> </p>
                    </div>
                </div>

                <div className="row mt-3 justify-content-center">
                    <div className="col-12">
                        <Link className="text-reset case-link" to="/cases/avenue"><img className="img-fluid" src="./images/webdev/avenue/avenue_2.png" alt="AVENUE FYI" /></Link>
                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <p className="col-3">Avenue</p>
                    <p className="col-9 col-sm-6">
                    For Avenue we designed and developed a new website and online shop reflecting their identity as a fashion brand. The design direction is a mix between future and brutalism. 
                    </p>
                    <p className="col-12 col-sm-3 text-right"><Link className="text-reset case-link" to="/cases/avenue">View case study+</Link></p>
                </div>
                

                <div className="row mt-3 justify-content-center">
                    <div className="col-12">
                        <Link className="text-reset case-link" to="/cases/eyec"><img className="img-fluid" src="./images/webdev/eyec/eyec_10.png" alt="Eye_C Magazine" /></Link>
                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <p className="col-3">Eye_C Magazine</p>
                    <p className="col-9 col-sm-6">
                    Togheter with eye_C we designed and developed the 2.0 version of their online magazine. As a result the website has a clean grid based design to highlight content, it is optimized for all screens and devices and has a structured backend system for ease of use when publishing new articles and content.
                    </p>
                    <p className="col-12 col-sm-3 text-right"><Link className="text-reset case-link" to="/cases/eyec">View case study+</Link></p>
                </div>

                <div className="row mt-5 justify-content-center no-gutters">
                    <div className="col-6">
                        <Link className="text-reset case-link" to="/cases/aoi"><img className="img-fluid" src="./images/design/aoi_look.jpg" alt="Aoi Project" /></Link>
                    </div>
                    <div className="col-6">
                        <Link className="text-reset case-link" to="/cases/aoi"><img className="img-fluid" src="./images/design/aoi_10.jpg" alt="Aoi Project" /></Link>
                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <p className="col-3">Aoi Project</p>
                    <p className="col-9 col-sm-6">
                    We created the visual identity, packaging design as well as a web shop for the brand Aoi Project. The visual identity is based on a natural and toned down look and feel to compliment the brands esthetics, with use of nature photography and muted colours.
                    </p>
                    <p className="col-12 col-sm-3 text-right"><Link className="text-reset case-link" to="/cases/aoi">View case study+</Link></p>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <Link className="text-reset case-link" to="/cases/gtf"><video width="100%" height="auto" autoplay="autoplay" loop>
                            <source src="./images/webdev/gtf/video/GTFvid.mp4" type="video/mp4" />
                            You are using an unsupported browser.
                        </video></Link>
                    </div>
                </div>

                <div className="row justify-content-center mt-3 mb-5">
                    <p className="col-3">Good Type Foundry</p>
                    <p className="col-9 col-sm-6">
                    Since the launch of Good Type Foundry, we have provided design and development for their website. Including a custom typeface tester and a comprehensive web shop solution.</p>
                    <p className="col-12 col-sm-3 text-right"><Link className="text-reset case-link" to="/cases/gtf">View case study+</Link></p>
                </div>
            </div>
        </div>


        <Route component={Projects} />
        <Route component={About} />
        </div>
    )
}

export default Home;