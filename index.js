const server = require('./api');

const port = process.env.PORT || 5000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
