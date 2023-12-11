import config from '../../config';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    await axios({
        method: req.method,
        url: (config.url_api && req.query.url)? (config.url_api + req.query.url):'',
        params: req.query,
        data: req.body,
        headers: {
            'Cache-Control': 'no-cache',
            'content-type': 'application/json'
        }
    }).then((response) => {
        res.status(response.status).json(response.data);
    }).catch((error) => {
        //handle error
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(error.status).json(error.data);
        }
    });

}