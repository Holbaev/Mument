import React, { Children, useState } from 'react';
import './Layout.scss';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Library from './components/Library/Library';
import Footer from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const Layout = ({children}) => {
    // states
    const [menuOpen , setMenuOpen] = useState(false);
    // functions
    const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="layout">
        <div className={`${!menuOpen ? "section_1" : "section_1 open"}`}>
        <Navigation/>
        <Library/>
        <button className="close_menu" onClick={toggleMenu}>
            <FontAwesomeIcon className="icon" icon={faClose}/>
        </button> 
        </div> 
        <div className="section_2">
        <Header toggleMenu={toggleMenu}/>
        <div className="section_2_content">
            {children}
        </div>
        <Footer/>
        </div>
    </div>
    )
}

export default Layout