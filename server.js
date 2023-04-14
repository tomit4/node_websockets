const express = require('express')
const app = express()
const route = express.Router()
const path = require('path')
const WebSocket = require('ws')

const port = 8080
const server = app.listen(port, () => console.log('express server started on: ', port))

const wss = new WebSocket.Server({ server })

app.use(express.static(path.join(__dirname, 'public')))
// app.use('/v1', route)

// Ideally you set this up as a separate server
route.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

wss.on('connection', ws => {
    console.log('client connection made...')
    ws.on('message', data => {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString())
            }
        })
    })
})
