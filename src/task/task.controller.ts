import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';
import { Task } from './interfaces/task.interface';

@Controller('task')
export class TaskController {
  constructor(private _taskService: TaskService) { }

  @Get()
  getTasks(): Promise<Task[]> {
    return this._taskService.getTasks();
  }
  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this._taskService.getTask(id);
  }
  @Post()
  createTask(@Body() task: TaskDto): Promise<Task> {
    return this._taskService.createTask(task);
  }
  @Put(':id')
  updateTask(@Body() task: TaskDto, @Param('id') id) {
    return this._taskService.updateTask(id, task);
  }
  @Delete(':id')
  deleteTask(@Param('id') id): Promise<Task> {
    return this._taskService.deleteTask(id);
  }
}
