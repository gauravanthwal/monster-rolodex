const mongoose = require('mongoose')

mongoose
  .connect(
    "mongodb+srv://gaurav:gaurav@cluster0.o9odr.mongodb.net/shoping",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
