import express from 'express';
import { toNodeHandler } from 'srvx/node';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

const webHandler = async (webReq) => {
  return new Response(`🔥`, {
    headers: [
      ['Content-Type', 'text/plain'],
      ['X-Testing', 'true'],
    ],
  });
};
app.get('/', toNodeHandler(webHandler));

app.listen(3000, () => {
  console.log('🚀 Express server is running on http://localhost:3000');
});
