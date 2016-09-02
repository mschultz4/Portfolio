"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    getInitialState: function(){
        return {
            show : 'portfolio'
        };
    },
    render: function (){
        if(this.state.show === 'portfolio'){
            return (<Portfolio/>);
        }

        if(this.state.show === 'about'){
            return (<About/>);
        }

        if(this.state.show === 'contact'){
            return (<Contact/>);
        }
    }
});

function Portfolio(){
   return <div>Portfolio</div>;
}

function About(){
    return <div>About</div>;
}

function Contact(){
   return <div>Contact</div>;
}


ReactDOM.render(<Main/>, document.getElementById('main'));
