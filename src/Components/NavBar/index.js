import React, { useState } from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbarelements';

export const Navbar = () => {

    return (
    <>
        <Nav>
            <NavLink to="/">
                <img src="Logo PPKM fixxxxx3x.png"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/Minggu-Kreasi" activeStyle>
                    Minggu Kreasi
                </NavLink>
                <NavLink to="/WoA" activeStyle>
                    Wall of Appreciation
                </NavLink>
                <NavLink to="/GFH" activeStyle>
                    Gigs from Home
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/contact-us">
                    Contact
                </NavBtnLink>
            </NavBtn>
        </Nav>
    </>
    );
};

export default Navbar;