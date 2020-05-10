import React from 'react';
import './NavBar.css';
import App from './App';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="TopBar">
                <ul className="listClass">
                    <li> Do it Today!</li>
                    <li id="shiftThisElement"> Your own To-Do List </li>
                </ul>
            </div>

        );
    }
}

export default NavBar;