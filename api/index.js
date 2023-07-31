import express from 'express';
import bodyParser from 'body-parser';
import { v4 } from 'uuid';

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/api/test', (request, response) => {
  const { name } = request.body;
  console.log('🚀 ~ file: index.js:23 ~ test ~ request:', request.body);
  // const { name } = request.body;
  // response.status(200).send({
  //   result: {
  //     name,
  //     test: "test",
  //   },
  // });

  // const res = await getLatestUpdateBlockFromDb();
  // handleErrorFromDbQuery(res, response);
  response.status(200).send({ test: 'test', name });
});
app.get('/testtest/test', (request, response) => {
  const { name } = request.body;
  console.log('🚀 ~ file: index.js:23 ~ test ~ request:', request.body);
  // const { name } = request.body;
  // response.status(200).send({
  //   result: {
  //     name,
  //     test: "test",
  //   },
  // });

  // const res = await getLatestUpdateBlockFromDb();
  // handleErrorFromDbQuery(res, response);
  response.status(200).send({ test: 'test22', name });
});

// example
app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

// example 2
app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

export default app;
