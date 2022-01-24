import express from 'express';
import 'express-async-errors';
import routes from './routes';
import 'reflect-metadata';
import uploadConfig from './config/upload';

import './database';
import registryError from './middlewares/registryError';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(registryError);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
