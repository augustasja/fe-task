import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type FormData = {
    requiredEmail: string
}

const Form = (props: Props) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <div className="form">
            <div className="form-content">
                <h1>Refer friends and get rewards</h1>
                <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
                <form onSubmit={onSubmit}>
                    <input placeholder="Enter your email address" type="text" {...register("requiredEmail", {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} />
                    <button type="submit">Get Referral Link</button>
                </form>
            </div>
            <div className="form-footer">
                <span>Limits on max rewards apply.</span>
            </div>
        </div>
    )
}

export default Form;