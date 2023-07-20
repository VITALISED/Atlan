import { default as express } from "express"

const app = express()
const port = 8888

app.get('/', (req, res) => {
    res.send(200)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})