import { Document } from 'mongoose';
export interface Task extends Document {  
  titulo: string;
  description: string;
  done: boolean;
}