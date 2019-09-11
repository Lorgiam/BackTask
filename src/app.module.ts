import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [GraphQLModule.forRoot({
     autoSchemaFile: 'schema.gql',
  }),MongooseModule.forRoot('mongodb+srv://root:root@cluster0-mqk80.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useFindAndModify: false }), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
