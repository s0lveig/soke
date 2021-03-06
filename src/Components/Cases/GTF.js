import React from 'react';

const GTF = () => {

    window.scrollTo(0, 0);

    return(
        <div id="case-container" className="container-fluid">

            <div className="bg-white padded-area text-center row justify-content-center">
                <h1 className="col-10 mt-5 mb-5 pt-5">
                    Good Type Foundry<br />
                    Web design &amp; development
                </h1>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12">
                    <div className="anim-container">
                        <img className="img-anim-1 img-fluid" src="../images/webdev/gtf/gtf_1.png" alt="Good Type Foundry Web Screen Shot" />
                        <img className="img-anim-2 img-fluid" src="../images/webdev/gtf/gtf_2.png" alt="Good Type Foundry Web Screen Shot" />
                    </div>
                </div>
            </div>

            <div className="row justify-content-center pt-5 pb-5 mt-5 mb-5">
                <div className="col-11 col-sm-6">
                    <h5>Background</h5>
                    <p>Good Type Foundry is an independent Oslo based type foundry, offering retail and custom typefaces for both digital and printed use. They design, develop and publish contemporary typefaces with high attention to detail.</p>
                </div>
                <div className="col-11 col-sm-6">
                    <h5>Description</h5>
                    <p>Since the launch of Good Type Foundry, we have provided design and development for their website. Including a custom typeface tester and a comprehensive web shop solution.</p>
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12 col-sm-6 pb-3">
                    <img className="img-fluid" src="../images/webdev/gtf/gtf_3.png" alt="Good Type Foundry Web Screen Shot" />
                </div>
                <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="../images/webdev/gtf/gtf_4.png" alt="Good Type Foundry Web Screen Shot" />
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12">
                    <video width="100%" height="auto" autoplay="autoplay" loop>
                        <source src="../images/webdev/gtf/video/GTFvid.mp4" type="video/mp4" />
                        You are using an unsupported browser.
                    </video> 
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12 col-sm-6 pb-3">
                    <img className="img-fluid" src="../images/webdev/gtf/gtf_5.png" alt="Good Type Foundry Web Screen Shot" />
                </div>
                <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="../images/webdev/gtf/gtf_6.png" alt="Good Type Foundry Web Screen Shot" />
                </div>
            </div>

            <div className="row bg-white justify-content-center mt-5 pt-5 pb-4">
                <div className="col-11 col-sm-6">
                    <p>
                    Client: Good Type Foundry<br />
                    Year: 2016-Present
                    </p>                    
                </div>
                <div className="col-11 col-sm-6">
                    <p>
                    Tags: Web Design, Web Development, E-Commerce<br />
                    Visit: <a className="text-reset case-link" href="https://www.goodtypefoundry.com/" rel="noopener noreferrer">www.goodtypefoundry.com</a>
                    </p>
                </div>
            </div>

        </div>

    )
}

export default GTF;