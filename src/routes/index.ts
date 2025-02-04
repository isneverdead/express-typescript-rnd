import { Application } from 'express';
import homeRoutes from './home.routes';
import sampleRoute from './sample.routes';
export default class Routes {
  constructor(app: Application) {
    app.use('/api', homeRoutes);
    app.use('/api/sample', sampleRoute);
  }
}
