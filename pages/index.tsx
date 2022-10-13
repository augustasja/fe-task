import type { NextPage } from 'next'
import Form from "../components/Form"
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
            <div className="step-section">
              <div className="first-step">
                <div className="step-logo">
                  <Image src="/assets/invite.svg" alt="invite" width="100%" height="100%" layout="responsive" />
                </div>
                <div className="step-description">
                  <span>STEP 1</span>
                  <h2>Invite friends</h2>
                  <p>Refer friends with your unique referral link.</p>
                </div>
              </div>
              <div className="second-step">
                <div className="step-logo">
                  <Image src="/assets/collect-coins.svg" alt="invite" width="100%" height="100%" layout="responsive" />
                </div>
                <div className="step-description">
                  <span>STEP 2</span>
                  <h2>Collect Coins</h2>
                  <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
                </div>
              </div>
              <div className="third-step">
                <div className="step-logo">
                  <Image src="/assets/voucher.svg" alt="invite" width="100%" height="100%" layout="responsive" />
                </div>
                <div className="step-description">
                  <span>STEP 3</span>
                  <h2>Collect Coins</h2>
                  <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          taegfea
        </div>
      </section>
    </main>
  )
}

export default Home
