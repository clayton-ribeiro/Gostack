import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointment', appointmentsRouter);
routes.use('/users', usersRouter);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World2' }),
);

export default routes;
