import mongoose from 'mongoose';

const { Schema } = mongoose;

export type TasksDocument = mongoose.Document & {
    name: string,
    status: string
};

const tasksSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
});

export const TasksModel = mongoose.model<TasksDocument>('tasks', tasksSchema);
