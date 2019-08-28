import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { TaskDto } from './dto/task.dto';

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

  async updateTask(id: any, task: TaskDto): Promise<Task> {
    await this.taskModel.findByIdAndUpdate(id, task);
    return this.taskModel.findById(id);

  }

  async deleteTask(id: any): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id);
  }
}
