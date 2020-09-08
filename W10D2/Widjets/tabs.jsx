import React from 'react';

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    
    }



    render() {
    const items = this.props.tabinfo.map(tab => tab.title)
    const itemContent = this.props.tabinfo.map(tab => tab.content)
        return (
            <ul>
                <h1 id="click"> {items[0]} </h1> 
                <article type="hidden">{itemContent[0]}</article>
                <br/>
                <h1> {items[1]} </h1> 
                <article>{itemContent[1]}</article>
                <br/>
                <h1> {items[2]} </h1> 
                <article>{itemContent[2]}</article>
                <br/>
            </ul>
        )
    };
}

export default Tab;