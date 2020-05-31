import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task, CheckList } from '../models/task_model';

@Injectable({
    providedIn: 'root'
})

export class CheckListService {

    private readonly baseUrl = `${environment.serviceDomain}/checkList`;

    constructor(private httpClient: HttpClient) { }
    
    /**
     * Create a checkList for a task
     */
    createCheckList(taskId: string, checkList: CheckList) {
        const url = `${this.baseUrl}?taskId=${taskId}`;
        return this.httpClient.post<CheckList>(url, checkList);
    }
}