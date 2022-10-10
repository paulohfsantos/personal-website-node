import { Router } from 'express';
import { HelloController } from '../controllers/hello.controller';

const routes = Router()

// controllers
const helloController = new HelloController

routes.get('/', helloController.hello)
routes.get('/ping', helloController.ping)

export default routes