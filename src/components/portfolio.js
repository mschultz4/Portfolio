function Portfolio(){ return (

<div>
    <div className="col-md-4 ">
        <div className="thumbnail">
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
        <div className="thumbnail">
            <img src="tictactoe.svg" alt="..." />
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
    </div>
    <div className="col-md-4 ">
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
    </div>
</div>
);}

module.exports = Portfolio;