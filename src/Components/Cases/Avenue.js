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
                    <video width="100%" height="auto" autoplay="autoplay" loop>
                        <source src="../images/webdev/avenue/video/avenue.mp4" type="video/mp4" />
                        You are using an unsupported browser.
                    </video> 
                </div>
            </div>

            <div className="row justify-content-center pt-5 pb-5 mt-5 mb-5">
                <div className="col-11 col-sm-6">
                    <h5>Background</h5>
                    <p>Avenue is a womens and menswear brand founded in Oslo, Norway. With a long background in music, design and textile production, Avenue creates clothes highly influenced by their music references. They specialise in  high quality garments with natural fibres and make distinct design suitable for everyday comfort.</p>
                </div>
                <div className="col-11 col-sm-6">
                    <h5>Description</h5>
                    <p>For Avenue we designed and developed a new website and online shop reflecting their identity as a fashion brand. The design direction is a mix between future and brutalism. The brand offers garments that are unisex in design, something we took into account when designing the webshop. It is made in a way which showcase all their pieces on both male and female models. Both lanes of products are scrollable, and each product displayed is a duplicate which links to the same shop page.</p>
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="../images/webdev/avenue/avenue_2.png" alt="Avenue FYI" />
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="../images/webdev/avenue/avenue_8.png" alt="Avenue FYI" />
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12 col-sm-6 pb-3">
                    <img className="img-fluid" src="../images/webdev/avenue/avenue_1.png" alt="Avenue FYI" />
                </div>
                <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="../images/webdev/avenue/avenue_3.png" alt="Avenue FYI" />
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12 col-sm-6 pb-3">
                    <img className="img-fluid" src="../images/webdev/avenue/avenue_4.png" alt="Avenue FYI" />
                </div>
                <div className="col-12 col-sm-6">
                    <img className="img-fluid" src="../images/webdev/avenue/avenue_6.png" alt="Avenue FYI" />
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="../images/webdev/avenue/avenue_7.png" alt="Avenue FYI" />
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