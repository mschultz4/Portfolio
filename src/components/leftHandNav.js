function leftHandNav(props){
    return (

            <div className="col-md-4 left-hand-nav">
                <div>
                    <h4><span>Matt</span><span id="lastName">Schultz</span></h4>
                    <h5>Full stack javascript developer.  Node lover.  Python acquaintance.</h5>
                </div>
                <ul className="nav nav-stacked">
                    <li role="presentation" className="active"><a id="portfolio" onClick={props.onClick} href="#">Portfolio</a></li>
                    <li role="presentation"><a id="about" onClick={props.onClick} href="#">About</a></li>
                    <li role="presentation" ><a id="contact" onClick={props.onClick} href="#">Contact</a></li>
                </ul>
                <div className="btn-group" role="group">
                    <a href="https://stackoverflow.com/users/3323691/?tab=profile" target="_blank" className="btn" role="button">
                        <i className="fa fa-stack-overflow fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="http://www.google.com" className="btn" target="_blank" role="button">
                        <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="http://www.google.com" className="btn" target="_blank" role="button">
                        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        );}

module.exports = leftHandNav;