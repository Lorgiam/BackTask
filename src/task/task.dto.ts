import { Field, ObjectType } from 'type-graphql';
@ObjectType()
export class TaskDto {
  @Field(type => String,{ nullable: true })
  readonly title?: string;
  @Field(type => String,{ nullable: true })
  readonly description?: string;
  @Field(type => Boolean,{ nullable: true })
  readonly done?: boolean;
}