// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { postEmail } from "../../utils/api/referral";

type ResponseData = {
    message: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    let email = req.body.email;

    if (!email) {
        res.status(400).send({
            message: "No email was provided",
        });

        return
    }

    try {
        await postEmail(email);

        res.status(201).send({
            message: 'Email successfully submitted',
        });
    } catch (error) {
        res.status(500).send({
            message: error as string
        });
    }
}
