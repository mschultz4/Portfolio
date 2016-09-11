"use strict";

var React = require('react');
var Portfolio = require("./portfolio.js");
var About = require("./about.js");
var LeftHandNav = require("./leftHandNav.js");
var Contact = require("./contact.js");
var Row = require('react-bootstrap').Row;
var Grid = require('react-bootstrap').Grid;
var Col = require('react-bootstrap').Col;

var Main = React.createClass({
    getInitialState: function(){
        return {
            show : 'portfolio'
        };
    },
    render: function (){
        var main;
        
        switch(this.state.show){
            case 'portfolio': 
                main = <Portfolio/>;
                break;
            case 'about':
                main = <About/>;
                break;
            case 'contact':
                main = <Contact/>;
                break;
        }
        
        return (
            <Grid>
                <Row>    
                    <Col md={4}>
                        <LeftHandNav 
                            onClick={this._handleNavClick} 
                            activeKey={this.state.show}
                        />
                    </Col>
                    <Col md={8}>
                        {main}
                    </Col>
                </Row>
                <Row>
                    <footer>
                        <p className="text-center"><em>this site crafted from scratch by Matt</em></p>
                    </footer>
                </Row>
            </Grid>
        );
    },
    _handleNavClick: function(key){
        this.setState({show: key});
    }
});

module.exports = Main;