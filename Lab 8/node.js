const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();

server.on("request", (request, response) =>
{
    const { query } = require("url").parse(request.url, true);
    if (query.name)
    {
        response.end(`You requested parameter name with value ${query.name}`);
    }
    else
    {
        response.end("Hello!");
    }
});
server.listen(PORT, () =>
{
    console.log(`starting server at port ${PORT}`);
});
