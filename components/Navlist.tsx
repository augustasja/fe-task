type Props = {
    ulStyle?: string,
    liStyle?: string
}

const Navlist = ({ulStyle, liStyle}: Props) => {
    return (
        <>
            <ul className={ulStyle}>
                <li className={liStyle}>
                    <a target="_blank" rel="noreferrer nofollow" href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">Chrome Extension</a>
                </li>
                <li className={liStyle}>
                    <a href="">Price Comparison</a>
                </li>
                <li className={liStyle}>
                    <a href="">Blog</a>
                </li>
            </ul>
        </>
    )
}

export default Navlist;