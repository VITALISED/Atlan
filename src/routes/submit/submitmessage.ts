import { Response, Request } from "express";


export function MessageHandler(request: Request, response: Response)
{
    console.log(request.body);
    response.sendStatus(200)
}