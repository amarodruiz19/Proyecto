mongoose
  .connect(
    "mongodb+srv://dbUser:BAKOPRz5SpwvoTW0@cluster0.6wmfv.mongodb.net/sg-sst?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Estamos a conectados a nuestra BD en la nube");
  })
  .catch(() => {
    console.log("Tenemos un problema en la nube");
  });