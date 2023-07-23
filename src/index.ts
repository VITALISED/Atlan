import { default as express } from "express"
import { Routes } from "./routes/routes"

const app = express()
const port = 8888

app.use(express.json())
app.use(Routes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})