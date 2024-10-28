import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Voice to Text App</h1>
            <div className="links">
                <a href="/" className="link">Home</a>
                <a href="/record" className="link">Record</a>
            </div>
        </nav>
    );
};

export default Navbar;
