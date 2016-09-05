var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

function leftHandNav(props){
    return (
        <div>
            <div>
                <h4><span>Matt </span><span id="lastName">Schultz</span></h4>
                <h5>Full stack javascript developer.  Node lover.  Python acquaintance.</h5>
            </div>
              <Nav bsStyle="pills" stacked activeKey={props.activeKey} onSelect={props.onClick}>
                <NavItem eventKey={'portfolio'} >Portfolio</NavItem>
                <NavItem eventKey={'about'} >About</NavItem>
                <NavItem eventKey={'contact'} >Contact</NavItem>
              </Nav>
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