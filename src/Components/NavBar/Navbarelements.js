import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #412d82;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #17cdfc;
    }
`
export const Bars = styled(HiMenu)`
    display: none;
    color: #412d82;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-item: center;
    margin-right: -24px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
        border-radius: 4px;
        background: #265ce1;
        padding: 10px 22px;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover{
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
`;
