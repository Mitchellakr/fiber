import React from 'react';
import Navigation from './Navigation';
import '../index.css'

export default function Header() {

    return (
        <header>
            <div className="container">
                <div className="header">
                    <p className='logo'>fiber</p>
                    <Navigation />
                </div>
            </div>
        </header>
    );
}