import { Module } from '@nestjs/common';
import { TaskResolver } from "./task.resolver";
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './task.schema';
import { TaskService } from './task.service';
@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Task', schema: TaskSchema
    }])],
    providers: [TaskResolver,TaskService]
})
export class TaskModule { }
