import { Response, Request } from "express";


export function BaseHandler(request: Request, response: Response)
{
    console.log(request.body)
    response.sendStatus(200)
}