import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock.jsx';

import Tab from './tabs.jsx';

const arr = [
    {title: "Tab 1", content: "This is tab 1"},
    {title: "Tab2", content: "This is tab 2"},
    {title: "Tab3", content: "This is tab 3"}
    ]
function Main() {
    return (
        <div>
            <Clock /> 
            <Tab tabinfo={arr} />
        </div>
    )
}
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const MainDom = <div></div>
    ReactDOM.render(<Main/>, root);
});