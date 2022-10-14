import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

type Props = {
    children: React.ReactNode
    title: string,
    description: string,
}

const Layout = ({ children, title, description }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={description} content="" />
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