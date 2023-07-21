import { Application } from "express";
import { default as SubmitRouter } from "./submit/index"

export default void function(app: Application)
{
    app.use("/", require("./blobserve"))
    app.use("/submit", SubmitRouter)
}
