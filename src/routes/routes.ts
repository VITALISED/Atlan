import { Application } from "express";
import { SubmitRouter } from "./submit/index"
import { QueryRouter } from "./query";
import { DebugRouter } from "./debug";
import { ReportRouter } from "./report";
import { BlobServe } from "./blobserve";

export function Routes(app: Application)
{
    app.get("/", BlobServe)
    app.use("/submit", SubmitRouter)
    app.use("/query", QueryRouter)
    app.use("/debug", DebugRouter)
    app.use("/report", ReportRouter)
}
