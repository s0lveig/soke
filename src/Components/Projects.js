import React from 'react';

const Projects = () => {
    return(
        <div id="projects-container" className="container-fluid pb-5">

            <div className="row justify-content-center pt-5 pb-4">
                <div className="col-8 text-center">
                    <h4>Projects</h4>
                    <p>
                    Beside client work we also establish and run our own projects and 
                    businesses in the fields of fashion, typography, publishing, interior and music.
                    See some of our adventures below:
                    </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-4 pr-5">
                    <img className="img-fluid" src="./images/soke_project_1.png" />
                </div>
                <div className="col-4 pl-5">
                    <img className="img-fluid" src="./images/soke_project_2.png" />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-4 pr-5 pt-2">
                    <p>Aoı Project is about making sustainable everyday objects and garments in an ethical way,
                    to replace consumer goods and add to a more sustainable wardrobe and lifestyle.</p>
                    <p><a className="text-reset case-link" href="http://www.aoiproject.eu" target="_blank">www.aoiproject.eu</a></p>
                </div>
                <div className="col-4 pl-5 pt-2">
                    <p>Good Type Foundry is an award winning Oslo based type foundry, offering retail
                        and custom typefaces for both digital and printed use.
                        We design, develop and publish contemporary typefaces with high attention to detail.
                    </p>
                    <p><a className="text-reset case-link" href="http://www.goodtypefoundry.com" target="_blank">www.goodtypefoundry.com</a></p>
                </div>
            </div>

        </div>
    )
}

export default Projects;