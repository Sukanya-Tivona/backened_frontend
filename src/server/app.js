const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const PORT  =7000

app.get("/message", (req, res) => {
  res.json({ message: "Hello from backend  server NOW COMMUNICATING !" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port 7000.`);
});
// const express = require("express");
// const path = require("path");

// const PORT = 4000;
// const STATIC_ASSETS_PATH = path.resolve(`${__dirname}/../../static`);

// const app = express();

// // Serve front end assets which have been built by webpack
// app.use("/static", express.static(STATIC_ASSETS_PATH));

// app.get("/", (request, response) => {
// 	response.send(`
// <!DOCTYPE html>
// <html>
// 	<body>
// 		<div id="container"></div>
// 		<script src="/static/bundle.js"></script>
// 	</body>
// </html>
// 	`);
// });

// app.listen(PORT, () => {
// console.log(`Example app listening on port ${PORT}.\n\nLoad it in your browser at http://localhost:${PORT}`)}
