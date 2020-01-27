const Koa = require("koa");
// const socketIO = require('socket.io');
const app = new Koa();
const PORT = 3200;

require("./routes")(app);

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server running on https://localhost:${PORT}`);
});
