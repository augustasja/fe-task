import type { NextPage } from 'next'
import Form from "../components/Form"
import Steps from "../components/Steps"
import StoreBlock from "../components/StoreBlock"

const meta = {
  title: 'Ratepunk',
  description: 'Ratepunk homepage'
}

const Home: NextPage = () => {
  return (
    <main className="landing-page">
      <section className="main-section">
        <div className="container wrapper">
          <div className="left">
            <Form />
          </div>
          <div className="right">
            <Steps />
          </div>
        </div>
      </section>
      <section className="store-section">
        <div className="container wrapper">
          <StoreBlock
            link="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
            place="chrome web store"
            logo={{ src: '/assets/chrome.svg' , width: 65, height: 58 }} />
          <StoreBlock
            link="https://apps.apple.com/app/ratepunk/id1607823726"
            place="apple app store"
            logo={{ src: '/assets/apple.svg' , width: 65, height: 58 }} />
            <div className="store-reviews">
              <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>Chrome store reviews</span>
            </div>
        </div>
      </section>
    </main>
  )
}

Home.defaultProps = meta;
export default Home
