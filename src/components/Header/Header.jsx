import React from 'react';

function Header({ title }) {
    return (
        <>
            <h1 title="Header" className="header">{title}</h1>
        </>
    );
}

export default Header;