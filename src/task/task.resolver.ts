import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TaskService } from "./task.service";
import { TaskDto } from './task.dto';
import { TaskInput } from './task.input';


@Resolver()
export class TaskResolver {
    constructor(
        private readonly _taskService: TaskService,
    ) { }

    @Query(returns => [TaskDto])
    async getTasks() {
        return await this._taskService.getTasks();
    }
    @Query(() => TaskDto)
    async getTask(@Args({ name: 'id', type: () => String }) id: string) {
        return await this._taskService.getTask(id);
    }
    @Mutation(() => TaskDto)
    async createTask(@Args('input') input: TaskInput) {
        return await this._taskService.createTask(input);
    }
    @Mutation(() => TaskDto)
    async updateTask(@Args({ name: 'id', type: () => String }) id: string, @Args('input') input: TaskInput) {
        return await this._taskService.updateTask(id, input);
    }
    @Mutation(() => TaskDto)
    async deleteTask(@Args({ name: 'id', type: () => String }) id: string) {
        return this._taskService.deleteTask(id);
    }
}