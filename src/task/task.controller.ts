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

@Controller('task')
export class TaskController {
  constructor(private _taskService: TaskService) {}

  @Get()
  getTask() {
    return 'get task';
  }
  @Post()
  createTask(@Body() createTaskDto: TaskDto): string {
    // tslint:disable-next-line:no-console
    console.log(createTaskDto);
    return 'create task';
  }
  @Put(':id')
  updateTask(@Body() task: TaskDto, @Param(':id') id) {
    return 'update task';
  }
  @Delete(':id')
  deleteTask(@Param('id') id) {
    // tslint:disable-next-line:no-console
    console.log(id);
    return 'delete task';
  }
}
