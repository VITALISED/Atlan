import { Router } from "express";
import { DiscoveryHandler } from "./submitdiscovery"
import { BaseHandler } from "./submitbase";
import { MessageHandler } from "./submitmessage";
import { BaseWithImageHandler } from "./submitbasewithimage";
import { ContributionHandler } from "./submitcontribution";
import { MonumentHandler } from "./submitmonument";
import { SettlementHandler } from "./submitsettlement";

const SubmitRouter = Router();

SubmitRouter.route("/")
    .post(DiscoveryHandler)
SubmitRouter.route("/message")
    .post(MessageHandler)
SubmitRouter.route("/base")
    .post(BaseHandler)
SubmitRouter.route("/basewithimage")
    .post(BaseWithImageHandler)
SubmitRouter.route("/monument")
    .post(MonumentHandler)
SubmitRouter.route("/contribution")
    .post(ContributionHandler)
SubmitRouter.route("/settlement")
    .post(SettlementHandler)

export { SubmitRouter };