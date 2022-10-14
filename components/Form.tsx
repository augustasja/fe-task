import { useState } from 'react'
import { useForm } from "react-hook-form";
import ReferralInput from './ReferralInput'

type FormData = {
    requiredEmail: string,
}

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onSubmit = handleSubmit(async data => {
        await submitEmail(data.requiredEmail).finally(() => setIsLoading(false));
    });

    const submitEmail = async (email: string) => {
        const response = await fetch('/api/referral', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await response.json();
    }

    return (
        <div className="referral-form">
            <div className="form-content">
                <h1>Refer friends and get rewards</h1>
                <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
                {
                    isLoading ?
                        <form onSubmit={onSubmit}>
                            {
                                errors.requiredEmail && errors.requiredEmail.message &&
                                <span className="error">{errors.requiredEmail.message}</span>
                            }
                            <div className="img-wrp">
                                <img src="/assets/email.svg" alt="email" height={16} width={20} />
                            </div>
                            <input placeholder="Enter your email address" type="text" {...register("requiredEmail", {
                                required: "Email is required.",
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: 'Invalid email address.'
                                }
                            })} />
                            <button className="btn-primary" type="submit">Get Referral Link</button>
                        </form>
                        :
                        <ReferralInput />
                }
            </div>
            <div className="form-footer">
                <span>Limits on max rewards apply.</span>
            </div>
        </div>
    )
}

export default Form;