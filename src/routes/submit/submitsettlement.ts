import { Response, Request } from "express";


export function SettlementHandler(request: Request, response: Response)
{
    console.log(request.body);
    response.sendStatus(200)
}