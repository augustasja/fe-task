// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { postEmail } from "../../utils/api/referral";

type ResponseData = {
    message: string,
    value: Object
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const email = req.body.email;

    const responseValue = await postEmail(email);

    res.status(201).json({
        message: 'Email successfully submited',
        value: responseValue
    });
}
