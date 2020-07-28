const fetch = require('node-fetch');
const TOKEN = process.env.DASHBOARD_BOT_TOKEN;

async function getBotGuilds() {
  const response = await fetch("http://discord.com/api/v6/users/@me/guilds", {
    method: 'GET',
    headers: {
      Authorization: `Bot NzA4NDA4NzMyNTc2NTE0MDky.XrW7Cw.ie2QEg4I-hwElVxphPHo_0z1qi4`
    }
  });
  return response.json();
};

module.exports = { getBotGuilds };