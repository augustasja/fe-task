import Image from "next/image"

const Steps = () => {
    return (
        <div className="step-section">
            <div className="first-step">
                <Image src="/assets/invite.svg" alt="invite" width={144} height={144} layout="fixed" />
                <div className="step-content">
                    <span className="step-count">Step 1</span>
                    <h2 className="step-header">Invite friends</h2>
                    <p className="step-description">Refer friends with your unique referral link.</p>
                </div>
            </div>
            <div className="second-step">
                <Image src="/assets/collect-coins.svg" alt="invite" width={144} height={144} layout="fixed" />
                <div className="step-content">
                    <span className="step-count">Step 2</span>
                    <h2 className="step-header">Collect Coins</h2>
                    <p className="step-description">Get 1 coin for each friend that installs our extension using your referral link.</p>
                </div>
            </div>
            <div className="third-step">
                <Image src="/assets/voucher.svg" alt="invite" width={144} height={107} layout="fixed" />
                <div className="step-content">
                    <span className="step-count">Step 3</span>
                    <h2 className="step-header">Get Voucher</h2>
                    <p className="step-description">Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
                </div>
            </div>
        </div>
    )
}

export default Steps