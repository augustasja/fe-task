import Image from "next/image"
import toast from "react-hot-toast";

const REFERRAL_LINK = 'https://ratepunk.com/referral';

const ReferralInput = () => {

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(REFERRAL_LINK)
            .then(() => {
                toast.success('Copied to clipboard!', {
                    id: 'successToast'
                });
            });
    }

    return (
        <div className="referral-link">
            <div className="referral-link-confirmation">
                <Image src="/assets/success.svg" alt="email-success" height={26} width={26} />
                <span>Your email is confirmed!</span>
            </div>
            <input type="text" value={REFERRAL_LINK} readOnly />
            <button className="btn-primary" onClick={handleCopyToClipboard}>Copy</button>
        </div>
    )
}

export default ReferralInput