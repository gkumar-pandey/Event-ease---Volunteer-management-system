const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./routes");
const connectDb = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

connectDb();

app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running at PORT:${PORT}`);
});
