import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';

const app = express();
const server = app.listen(8080);
app.use(express.json());

const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {

    ws.on('message', function message(data, isBinary) {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });
});