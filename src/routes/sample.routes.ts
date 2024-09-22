import { Router } from 'express';
import SampleController from '../controllers/sample.controller';

class SampleRoutes {
  router = Router();
  controller = new SampleController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Item
    this.router.post('/', this.controller.create);

    // Retrieve all Items
    this.router.get('/', this.controller.findAll);

    // Retrieve a single Item with id
    this.router.get('/:id', this.controller.findOne);

    // Update a Item with id
    this.router.put('/:id', this.controller.update);

    // Delete a Item with id
    this.router.delete('/:id', this.controller.delete);
  }
}

export default new SampleRoutes().router;
