import { Field, InputType } from 'type-graphql';
@InputType()
export class TaskInput {
    @Field(type => String, { nullable: true })
    readonly title: string;
    @Field(type => String, { nullable: true })
    readonly description: string;
    @Field(type => Boolean, { nullable: true })
    readonly done: boolean;
}
