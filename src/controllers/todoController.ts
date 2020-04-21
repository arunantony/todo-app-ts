/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import * as tasks from '../models/tasks';

// Create post task
export const todo_task_post = (req: Request, res: Response, next: NextFunction) => {
  const reqObj = req.body;
  const name = reqObj.name ? reqObj.name : null;
  const status = reqObj.status ? reqObj.status : null;

  if (name === null || status === null) {
    return res.status(400).json({ status: false, message: 'Missing parameters' });
  }

  tasks.createTask(reqObj)
    .then((doc: any) => res.status(201).json({ status: true, message: 'Task created successfullly', taskId: doc.id }))
    .catch((err) => {
      next(err);
    });
};

// Read Task
export const todo_task_get = (req: Request, res: Response, next: NextFunction) => {
  tasks.readTask()
    .then((data: any) => {
      const tasksCount = data.length;
      if (tasksCount === 0) {
        res.status(200).json({ status: true, message: 'Tasks empty', tasksCount });
      } else {
        res.status(200).json({
          status: true, message: 'Task read successfully', tasksCount, task: data,
        });
      }
    })
    .catch((err) => {
      next(err);
    });
};

// Update Task
export const todo_task_put = (req: Request, res: Response, next: NextFunction) => {
  const reqObj = req.body;

  const taskId = req.params.taskId ? req.params.taskId : null;
  const name = reqObj.name ? reqObj.name : null;
  const status = reqObj.status ? reqObj.status : null;

  if (taskId === null || name === null || status === null) {
    return res.status(400).json({ status: false, message: 'Missing parameters' });
  }

  reqObj.taskId = taskId;
  tasks.updateTask(reqObj)
    .then((docs: any) => {
      if (docs.nModified === 1) {
        res.status(200).json({ status: true, message: 'Task updated successfullly' });
      } else {
        res.status(404).json({ status: false, message: 'Got invalid credentials. Task update failed.' });
      }
    })
    .catch((err) => {
      next(err);
    });
};

// Delete task
export const todo_task_delete = (req: Request, res: Response, next: NextFunction) => {
  const taskId = req.params.taskId ? req.params.taskId : null;

  if (taskId === null) {
    return res.status(400).json({ status: false, message: 'Missing parameters' });
  }

  const data = { taskId };
  tasks.deleteTask(data)
    .then((docs: any) => {
      if (docs.deletedCount === 1) {
        res.status(200).json({ status: true, message: 'Task deleted successfullly' });
      } else {
        res.status(404).json({ status: false, message: 'Got invalid credentials. Task delete failed.' });
      }
    })
    .catch((err) => {
      next(err);
    });
};
