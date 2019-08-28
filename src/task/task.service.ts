import { Injectable } from '@nestjs/common';
import { TaskInterface } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  tasks: TaskInterface;

  getTasks() {
    return this.tasks;
  }

  getTask() {
    return this.tasks;
  }
}
