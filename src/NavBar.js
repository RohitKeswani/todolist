import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    render(){
        return (
            <div className="TopBar">
                <p>
                    <a href="../public/index.html">Do it Today: your own to-do list </a>
                </p>
            </div>

        );
    }
}

export default NavBar;