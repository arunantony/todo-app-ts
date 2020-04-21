import app from './server';

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('Press CTRL-C to stop...');
});
