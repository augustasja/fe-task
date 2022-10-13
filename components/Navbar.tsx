import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import Navlist from "./Navlist"

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
                        <Image src="/assets/logo.svg" alt="ratepunk-logo" width={125} height={32} layout="fixed" />
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
                <Navlist ulStyle="nav-list" liStyle="nav-item" />
            </div>
            <div className={`container ${isOpen ? 'menu-active' : 'menu-disabled'}`}>
                <Navlist />
            </div>
        </nav>
    )
}

export default Navbar;