import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task, CheckList, CheckListFormType } from '../models/task_model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CheckListService {

    private readonly baseUrl = `${environment.serviceDomain}/checkList`;

    constructor(private httpClient: HttpClient) { }
    
    /**
     * Create or edit a checkList for a task
     */
    createOrEditCheckList(itemId: string, checkList: CheckList, formType: string) {
        let url: string;
        
        formType != CheckListFormType.addCheckList 
            ? url = `${this.baseUrl}/${itemId}` 
            : url =  `${this.baseUrl}?taskId=${itemId}`;
        
        return this.httpClient.post<CheckList>(url, checkList).pipe(
            map(response => {
                const result: any = response;
                return result;
            })
        );
    }

    deleteACheckList(checkListId) {
        const url = `${this.baseUrl}/${checkListId}`;
        return this.httpClient.delete(url).pipe(
            map(response => {
                const result: any = response;
                return result;
            })
        );
    }
}