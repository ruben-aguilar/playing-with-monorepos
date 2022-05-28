"use strict";

const Hapi = require("@hapi/hapi");
const nameGenerator = require("name-generator");

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "0.0.0.0",
  });

  server.route({
    method: "GET",
    path: "/name",
    handler: (request, h) => {
      return { name: nameGenerator.generateName() };
    },
    options: {
      cors: true,
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
