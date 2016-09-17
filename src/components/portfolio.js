var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

function Portfolio(){ 
    return (
<div>
    <Row>
        <Col md={6}>
        <div className="thumbnail span6">
            <div className="project-picture">
                <i className="fa fa-book fa-3x" aria-hidden="true"></i>
                <h5>RecipeBox</h5>
            </div>
            <div className="caption">
                <p>Learning App for storing recipes. Built with...</p>
                <div>
                    <ul className="list-unstyled">
                        <li>
                            <span className="tech">React</span> for views
                        </li>
                        <li>
                            <span className="tech">Flux</span> for data flow
                        </li>
                        <li>
                            <span className="tech">Express</span> "for routes and middleware" </li>
                        <li>
                            <span className="tech">MongoDb</span> "for persistent storage"
                        </li>
                        <li>
                            <span className="tech">WebPack</span> "for build process"
                        </li>
                        <li>
                            <span className="tech">Travis</span> for continuous builds
                        </li>
                    </ul>
                    <div className="text-center">
                        <a href="http://www.google.com">
                            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="btn btn-default" role="button">Live</a>
                    </div>
                </div>
            </div>
        </div>
        </Col>
        <Col md={6}>
        <div className="thumbnail span6">
            <img src="tictactoe.svg" alt="..." className="project-picture" />
            <h5>Minimax TicTacToe</h5>
            <div className="caption">
                <p>Tic Tac Toe Application</p>
                <ul className="list-unstyled">
                    <li>
                        <span className="tech">Angular</span> "for the front-end"
                    </li>
                    <li>
                        <span className="tech">Web.py/Python</span> "for the back-end"
                    </li>
                    <li>
                        <span className="tech">Jasmine</span> "for unit tests"
                    </li>
                    <li>
                        <span className="tech">WebPack</span> "for build process"
                    </li>
                    <li>
                        <span className="tech">Travis</span> "for continuous builds"
                    </li>
                </ul>
                <div className="text-center">
                    <a href="http://www.google.com">
                        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="btn btn-default" role="button">Live</a>
                </div>
            </div>
        </div>
        </Col>
    </Row>
    <Row>
    <Col md={6}>
        <div className="thumbnail">
            <div className="project-picture">
                <div className="placeholder"></div>
            </div>
            <h5>color-randomizer</h5>
            <div className="caption">
                <p>npm package for generating random colors</p>
                <p> to use
                 <code><pre>npm install color-randomizer</pre></code>
                </p>
                <div className="text-center">
                    <a href="https://github.com/mschultz4/color-randomizer">
                        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.npmjs.com/package/color-randomizer" >npm</a>
                </div>
            </div>
        </div>
        </Col>
    <Col md={6}>
        <div className="thumbnail">
            <div className="project-picture">
                <div className="placeholder"></div>
            </div>
            <div className="caption">
                <div className="text-center thumbnail-footer">
                    <a href="http://www.google.com">
                        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="btn btn-default" role="button">Live</a>
                </div>
            </div>
        </div>
        </Col>
    </Row>
    <Row>
    <Col md={6}>
        <div className="thumbnail">
            <div className="project-picture">
                <div className="placeholder"></div>
            </div>
            <div className="caption">
                <div className="text-center">
                    <a href="http://www.google.com">
                        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="btn btn-default" role="button">Live</a>
                </div>
            </div>
        </div>
        </Col>
    <Col md={6}>
        <div className="thumbnail">
            <div className="project-picture">
                <div className="placeholder">
                </div>
            </div>
            <div className="caption">
                <div className="text-center">
                    <a href="http://www.google.com">
                        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="btn btn-default" role="button">Live</a>
                </div>
            </div>
        </div>
        </Col>
    </Row>
</div>
);}

module.exports = Portfolio;