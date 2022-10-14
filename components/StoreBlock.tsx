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

const StoreBlock = ({link, place, logo}: Props) => {
    return (
        <a className="store-block" href={link}>
            <Image src={logo.src} alt="chrome-store" width={logo.width} height={logo.height} layout="fixed" />
            <div className="store-content">
                <span className="store-title-1">available in the</span>
                <span className="store-title-2">{place}</span>
            </div>
        </a>
    )
}

export default StoreBlock;