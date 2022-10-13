import React from 'react'
import Image from "next/image"

type Props = {
    link: string,
    place: string,
    logo: {
        src: string,
        width: number,
        height: number,
    }
}

const StoreBlock = (props: Props) => {
    return (
        <a className="store-block" href={props.link}>
            <Image src={props.logo.src} alt="chrome-store" width={props.logo.width} height={props.logo.height} layout="fixed" />
            <div className="store-content">
                <span className="store-title-1">available in the</span>
                <span className="store-title-2">{props.place}</span>
            </div>
        </a>
    )
}

export default StoreBlock;