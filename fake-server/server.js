const serverJson = require('json-server');
const server = serverJson.create();
const router = jsonServer.router('music.json');
const middleware = jsonServer.defaults();
const port = process.env.port || 8000;

server.use(middleware);
server.use(router);
server.listen(port)