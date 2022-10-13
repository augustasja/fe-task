import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "./Footer";

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>RatePunk</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <header>
                <Navbar />
            </header>
            {children}
            <footer className="footer">
                <Footer />
            </footer>
        </>
    )
}

export default Layout;