module.exports = robot => robot.router.post('/wakeup', (request, response) => {
  robot.send({
    room: request.body.channel_name
  }, '起きたよ');
  response.end();
});
