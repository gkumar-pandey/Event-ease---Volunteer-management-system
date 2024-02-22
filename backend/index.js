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

const PORT = process.env.PORT || 5000;

connectDb();

app.use("/", routes);
app.use(globalErrorHandlerMiddleware);
app.use(pageNotFoundErrorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`server is running at PORT:${PORT}`);
});
