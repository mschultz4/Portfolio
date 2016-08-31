"use strict";

var Main = React.createClass({
    getInitialState: function(){
        return {
            show : 'portfolio'
        }
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
    <div>Portfolio</div>
}

function About(){
    <div>About</div>
}

function Contact(){
    <div>Contact</div>
}


ReactDOM.render(<Main/>, document.getElementById('main'));
