const router = require('express').Router();
const { getBotGuilds } = require('../utils/api');

router.get('/guilds', async (req, res) => {
  const guilds = await getBotGuilds();
  console.log(guilds);
  res.send(guilds);
});



module.exports = router;