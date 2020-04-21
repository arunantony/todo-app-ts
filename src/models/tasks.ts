import dbSchemaModel from '../database';

const { TasksModel } = dbSchemaModel.models;

// Create task
const createTask = (data: any) => new Promise((resolve, reject) => {
  const newTasksModel: any = new TasksModel();
  newTasksModel.name = data.name;
  newTasksModel.status = data.status;
  newTasksModel.save((err: any, doc: any) => {
    if (err) return reject(err);
    return resolve(doc);
  });
});

// Read task
const readTask = () => new Promise((resolve, reject) => {
  TasksModel.find({})
    .then((data: any) => resolve(data))
    .catch((err: any) => reject(err));
});

// Update task
const updateTask = (data: any) => new Promise((resolve, reject) => {
  TasksModel.updateOne({ _id: data.taskId }, { $set: { name: data.name, status: data.status } })
    .then((docs: any) => resolve(docs))
    .catch((err: any) => reject(err));
});

// Delete task
const deleteTask = (data: any) => new Promise((resolve, reject) => {
  TasksModel.deleteOne({ _id: data.taskId })
    .then((docs: any) => resolve(docs))
    .catch((err: any) => reject(err));
});

export {
  createTask,
  readTask,
  updateTask,
  deleteTask,
};
