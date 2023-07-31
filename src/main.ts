const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const test = async (request, response) => {
  const { name } = request.body;
  console.log("🚀 ~ file: index.js:23 ~ test ~ request:", request.body);
  response.status(200).send({ test: "test", name });
};
app.get("/api/test", test);
