import { Response, Request } from "express";


export function BlobServe(request: Request, response: Response)
{
    console.log(request.body)
    response.send({
        jwt: "ghgughhh",
        routes: {

        },
        //TODO: implement with user settings manager of some sort, this is just debug information.
        settings: {
            discoveryrefreshrate: 0x258,
            messages: true,
            authTokenExpiration: 1690094826, //epoch
            currentCmIndex: 79, // community mission probably?
            currentCmStartEpoch: 1686143400,
            currentCmEndEpoch: 7258122000,
            nextCmStartEpoch: 7258118400,
            nextCmEndEpoch: 7258122000,
            userCmContribution: 0,
            maxUserContribution: 0,
            contributionLevels: [1, 2, 3, 4, 5, 6],
            currentTotalContribution: 59,
            previousCommunalTiers: [
                { index: 0, tier: 0 }, //example
            ],
            maxUserDailyContribution: 5,
            cmRefreshRate: 900,
            seasonData: 
            {
                currentSeason: 17,
                StartDate: 1674043200,
                EndDate: 1680609600,
                Hash: 3089516327,
                nextSeason: 0,
                nextStartDate: 0
            }
        },
        rewards: { twitch: [] },
        ts: 1690093164,
        openid: ""
    })
}