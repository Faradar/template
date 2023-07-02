import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

app.use((req, res) => {
    res.status(404).send('We couldn\'t find your page, try again')
})

app.listen(port)
console.log(`listening on ${port}`)