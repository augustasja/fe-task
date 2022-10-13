import type { NextPage } from 'next'
import Form from "../components/Form"
import Steps from "../components/Steps"
import Image from "next/image"

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
          <a className="store-block" href="">
            <Image src="/assets/chrome.svg" alt="chrome-store" width="65" height="58" layout="fixed"/>
            <div className="store-content">
              <span className="store-title-1">available in the</span>
              <span className="store-title-2">chrome web store</span>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
