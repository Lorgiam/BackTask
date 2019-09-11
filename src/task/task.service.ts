import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.interface';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { }

  async getTasks(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async getTask(id: string): Promise<Task> {
    try {
      return await this.taskModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Sin Resultados');
    }
  }

  async createTask(task: TaskDto): Promise<Task> {
    const taskObj = await this.taskModel.create(task);
    taskObj.save();
    return taskObj;
  }

  async updateTask(id: string, task: TaskDto): Promise<Task> {
    await this.taskModel.findByIdAndUpdate(id, task);
    return this.taskModel.findById(id);

  }

  async deleteTask(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id);
  }
}