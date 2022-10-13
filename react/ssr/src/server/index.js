import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';

import Routers from '../router/index.js';

const app = express();

app.use(express.static('dist/public'));

app.get("*", (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routers />
    </StaticRouter>
  );

  const html = `
    <html>
      <head></head>
      <body>
        <section id="root">${content}</section>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
  res.send(html);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
