import React from 'react';

const Avenue = () => {

    window.scrollTo(0, 0);

    return(
        <div id="case-container" className="container-fluid">

            <div className="bg-white padded-area text-center row justify-content-center">
                <h1 className="col-10 mt-5 mb-5 pt-5">
                    Avenue<br />
                    Web design &amp; development
                </h1>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12">
                </div>
            </div>

            <div className="row justify-content-center pt-5 pb-5 mt-5 mb-5">
                <div className="col-11 col-sm-6">
                    <h5>Background</h5>
                    <p></p>
                </div>
                <div className="col-11 col-sm-6">
                    <h5>Description</h5>
                    <p></p>
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
                    Client: Avenue<br />
                    Year: 2020
                    </p>                    
                </div>
                <div className="col-11 col-sm-6">
                    <p>
                    Tags: Web Design, Web Development, E-Commerce<br />
                    Visit: <a className="text-reset case-link" href="https://www.avenue.fyi/" rel="noopener noreferrer">www.avenue.fyi</a>
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Avenue;