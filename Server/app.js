import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan'
import homeRouter from './routes/home';

const app = express();
const path = require("path");

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
require('dotenv').config()


app.use("/", homeRouter )


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB not connected ", error));


// app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./frontend/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Server is running on port 8000");
});