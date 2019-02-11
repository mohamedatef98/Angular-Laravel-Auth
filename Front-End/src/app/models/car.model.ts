import {Comment} from './comment.model';

export class Car{
  id?: number;

  make: string;

  model: string;

  year: number;

  user_id?: number;

  created_at?: string;

  updated_at?: string;

  comments?: Array<Comment>;

}
