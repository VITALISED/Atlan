import { Router } from "express";

const SubmitRouter = Router();

SubmitRouter.route("/")
SubmitRouter.route("/message")
SubmitRouter.route("/base")
SubmitRouter.route("/basewithimage")
SubmitRouter.route("/monument")
SubmitRouter.route("/contribution")
SubmitRouter.route("/settlement")

export { SubmitRouter };