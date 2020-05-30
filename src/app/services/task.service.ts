import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task, CheckList } from '../models/task_model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly baseUrl = `${environment.serviceDomain}/tasks`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets all the tasks `Task[]`
   */
  getAll() {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  /**
   * Creates a new task
   * @param task `Task` object
   */
  createTask(task: Task) {
    return this.httpClient.post<Task>(this.baseUrl, task);
  }

  /**
   * Gets the specific task with given Id
   * @param taskId 
   */
  getTask(taskId) {
    const url = `${this.baseUrl}/${taskId}`;

    return this.httpClient.get<Task>(url);
  }

  /**
   * Updates the task
   * @param task `Task` object
   */
  updateTask(task: Task) {
    const url = `${this.baseUrl}/${task.id}`;

    return this.httpClient.put<Task>(url, task);
  }

  /**
   * Deletes a purticular task with given id
   * @param taskId 
   */
  deleteTask(taskId) {
    const url = `${this.baseUrl}/${taskId}`;

    return this.httpClient.delete<Task>(url);
  }


}
