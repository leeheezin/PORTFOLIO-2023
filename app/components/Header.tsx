'use client'

import { useEffect, useState } from "react";
import Link from 'next/link'
import { MdToggleOff,MdToggleOn } from "react-icons/md";
import styled from 'styled-components'
import Image from "next/image";

const styledIcon = {
    width: "60px",
    height: "40px"
}

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 2%;
`
const Nav = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`

export default function Header() {
    const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

    const handleToggle = () => {
        setDarkTheme(!darkTheme);
        };
        
        useEffect(() => {
            if (darkTheme !== undefined) {
            if (darkTheme) {
                document.body.setAttribute("data-theme", "dark");
                window.localStorage.setItem("theme", "dark");
            } else {
                document.body.removeAttribute("data-theme");
                window.localStorage.setItem("theme", "light");
            }
            }
        }, [darkTheme]);
        
        useEffect(() => {
            const root = window.document.body;
            const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
            );
        
            setDarkTheme(initialColorValue === "dark");
        }, []);
    return(
        <HeaderWrap>
            <h1 className="text-5xl font-bold">
                Zin
                {/* <Image 
                    src="/zin.png" 
                    width={80}
                    height={20}
                    alt="logo image"/> */}
            </h1>
            <Nav>
                <ul>
                    <li><Link href="/" className="text-3xl font-bold">Home</Link></li>
                    <li><Link href="/about" className="text-3xl font-bold">About</Link></li>
                    <li><Link href="/project" className="text-3xl font-bold">Project</Link></li>
                    <li><Link href="/contact" className="text-3xl font-bold">Contact</Link></li>
                    {/* <li className="github"><Link href="https://github.com/leeheezin"  className="text-3xl font-bold" target="_blank">Github</Link></li> */}
                    <button onClick={handleToggle}>{darkTheme ? <MdToggleOn style={styledIcon}/>: <MdToggleOff style={styledIcon}/>}</button>
                </ul>
            </Nav>
        </HeaderWrap>
    )
}   
