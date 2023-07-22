import { Response, Request } from "express";


export function MonumentHandler(request: Request, response: Response)
{
    console.log(request.body);
    response.sendStatus(200)
}