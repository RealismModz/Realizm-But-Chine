module.exports = (express, app) => {
  app.all("/", async(req, res) => {
    return await res.send("Hello World");
  });

  app.listen(4000, async() => {
    console.log("Api Online");
  });
};