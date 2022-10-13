import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import qs from 'qs';

import Routers from "../router";

import setStore from "../store";

const app = express();

app.use(express.static("dist/public"));

app.get("*", (req, res) => {
  const params = qs.parse(req.query);
  const userId = parseInt(params.userId, 10) || 0;
  const store = setStore({ userId });
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <Routers />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  const html = `
    <html>
      <head></head>
      <body>
        <section id="root">${content}</section>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
