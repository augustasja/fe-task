import React from 'react'
import Image from "next/image"
import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav>
            <div className="container nav">
                <Link href="/">
                    <a>
                        <Image src="/assets/logo.svg" alt="logo" width={125} height={32} />
                    </a>
                </Link>
                <div className="hamburger" data-collapse-toggle="navbar" aria-controls="navbar" aria-expanded="false">
                    <Image src="/assets/menu.svg" alt="hamburger-menu" width={18} height={16} />
                </div>
                <ul className="nav-list">
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
        </nav>
    )
}

export default Navbar;