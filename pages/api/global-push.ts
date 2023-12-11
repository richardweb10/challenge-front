import config from '../../config';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    await axios({
        method: req.method == 'PATCH'? 'PUT':req.method,
        url: (config.url_api && req.body.url)? (config.url_api + req.body.url):'',
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