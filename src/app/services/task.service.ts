import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Task } from 'src/app/model/Task';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask():  Observable<Task[]>{
    const tasks=of(TASKS);
    return tasks;
  }
}
