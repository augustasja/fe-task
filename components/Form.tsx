import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

type Props = {}

type FormData = {
    requiredEmail: string,
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Form = (props: Props) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = handleSubmit(data => {
        console.log(data)
    });

    return (
        <div className="referral-form">
            <div className="form-content">
                <h1>Refer friends and get rewards</h1>
                <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
                <form onSubmit={onSubmit}>
                <span className="error">{errors.requiredEmail && errors.requiredEmail.message}</span>

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
            </div>
            <div className="form-footer">
                <span>Limits on max rewards apply.</span>
            </div>
        </div>
    )
}

export default Form;