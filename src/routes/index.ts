import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
const routes = Router();

routes.use('/appointment', appointmentsRouter);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World2' }),
);

export default routes;
