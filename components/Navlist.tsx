import React from 'react'

type Props = {
    ulStyle?: string,
    liStyle?: string
}

const Navlist = (props: Props) => {
    return (
        <>
            <ul className={props.ulStyle}>
                <li className={props.liStyle}>
                    <a target="_blank" rel="noreferrer nofollow" href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">Chrome Extension</a>
                </li>
                <li className={props.liStyle}>
                    <a href="">Price Comparison</a>
                </li>
                <li className={props.liStyle}>
                    <a href="">Blog</a>
                </li>
            </ul>
        </>
    )
}

export default Navlist;