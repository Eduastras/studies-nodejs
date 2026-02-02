import http from "http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer(async (request, response) => {
  // middleware de body.
  await jsonBodyHandler(request, response);
  // middleware de rota.
  routeHandler(request, response);
});

server.listen(3333);
