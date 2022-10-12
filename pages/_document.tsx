import { Html, Head, Main, NextScript } from 'next/document'
import type { NextPage } from 'next'

const Document: NextPage = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;