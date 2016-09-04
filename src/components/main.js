"use strict";

var React = require('react');
var Portfolio = require("./portfolio.js");
var About = require("./about.js");
var LeftHandNav = require("./leftHandNav.js");

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
                main = <Portfolio/>
                break;
            case 'about':
                main = <About/>
                break;
            case 'contact':
                main = <Contact/>
                break;
        }
        
        return (
            <div className="row">
                <LeftHandNav onClick={this._handleNavClick}/>
                {main}
            </div>
        );
    },
    _handleNavClick: function(event){
        var item = event.target.id;
        console.log(event.target);
        this.setState({show: item});
    }
});

module.exports = Main;



function Contact(){
   return <div>Contact</div>;
}


