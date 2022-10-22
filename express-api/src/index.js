const app = require('./app');

const port = process.env.PORT || 5003;
//TODO: Remove local network when deploying
app.listen(port, '192.168.1.103', () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
