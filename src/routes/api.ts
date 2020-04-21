import { Request, Response, Router } from 'express';
import * as todoController from '../controllers/todoController';

const router = Router();

// Handle the Root request
router.all('/', (req: Request, res: Response) => {
  res.send('API Root has no operation. Request successfull.');
});

// /------------------------------ TODO CONTROLLER ROUTES -------------------------------------/ //

/* POST request to test Create new task */ /* -- CREATE -- */
router.post('/task', todoController.todo_task_post);

/* GET request to fetch task list */ /* -- READ -- */
router.get('/task', todoController.todo_task_get);

/* PUT request to update task */ /* -- UPDATE -- */
router.put('/task/:taskId', todoController.todo_task_put);

/* DELETE request to delete task */ /* -- DELETE -- */
router.delete('/task/:taskId', todoController.todo_task_delete);

export default router;
