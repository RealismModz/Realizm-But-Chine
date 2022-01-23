const path = require('path')
module.exports = (express, app) => {
	app.use(express.static(path.resolve(__filename, '..', '..', 'downloads')))
  app.all("/", async(req, res) => {
    return await res.redirect("https://yieldingexploiter.github.io/img/themes/sakurajima-mai/nsfw/Gelbooru%20-%205737125.png%20-%20Scaled/100/Image.webp");
  });

  app.listen(4000, async() => {
    console.log("Api Online");
  });
};