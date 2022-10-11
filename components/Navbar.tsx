import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleWindowResize = () => {
            window.innerWidth < 1120 && setIsOpen(false);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [])

    return (
        <nav>
            <div className="container nav">
                <Link href="/">
                    <a>
                        <Image src="/assets/logo.svg" alt="logo" width={125} height={32} />
                    </a>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className="hamburger">
                    {
                        !isOpen ?
                            <Image src="/assets/menu.svg" alt="hamburger-menu" width={18} height={16} />
                            :
                            <Image src="/assets/close.svg" alt="hamburger-menu-close" width={18} height={16} />
                    }
                </div>
                <ul className="nav-list" id="navbar">
                    <li className="nav-item">
                        <a href="">Chrome Extension</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Price Comparison</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Blog</a>
                    </li>
                </ul>
            </div>
            <div className={`menu ${isOpen ? 'menu-active' : 'menu-disabled'}`}>
                <ul>
                    <li>
                        <a href="">Chrome Extension</a>
                    </li>
                    <li>
                        <a href="">Price Comparison</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;