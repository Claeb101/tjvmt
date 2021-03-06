import nc from 'next-connect'
import type { NextApiRequest, NextApiResponse } from 'next';

const base = (params = {}) => nc<NextApiRequest, NextApiResponse<any>>({
    onError: (err, req, res, next) => {
        console.error(err);
        res.statusCode = err.status && err.status >= 100 && err.status < 600 ? err.status : 500;
        res.json({ message: err.message });
    },
    ...params
})


export default base