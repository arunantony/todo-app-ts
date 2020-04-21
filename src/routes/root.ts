import { Request, Response, Router } from 'express';

const router = Router();

// Handle the Root request
router.all('/', (req: Request, res: Response) => {
  res.send('Root has no operation. Request successfull.');
});

export default router;
