import { Application } from "express";
import { SubmitRouter } from "./submit/index"
import { QueryRouter } from "./query";
import { DebugRouter } from "./debug";
import { ReportRouter } from "./report";

export default void function(app: Application)
{
    app.get("/", require("./blobserve"))
    app.use("/submit", SubmitRouter)
    app.use("/query", QueryRouter)
    app.use("/debug", DebugRouter)
    app.use("/report", ReportRouter)
}
