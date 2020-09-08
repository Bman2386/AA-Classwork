import React from 'react';

class Clock extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          currentTime: new Date().toLocaleString().split(",")[1],
        }
    };

    // this.tick.bind(this);
    
    tick() {
        this.setState({
            currentTime: new Date().toLocaleString().split(",")[1],
        });
    }
    
    componentDidMount(){
        window.setInterval(
            () => this.tick(), 1000);
    }

    render(){
        return (
            <>
        <h1>Clock</h1>
        <p id="clock">{this.state.currentTime}</p>
        </>
        )
    };

}

export default Clock;