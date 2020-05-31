import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class NotificationService {

    public checkListItemTriggered = new Subject<any>();

    constructor () {}

    /**
     * 
     */
    public portionOfTaskCompleted(data: number) {
        this.checkListItemTriggered.next({data});
    }
}