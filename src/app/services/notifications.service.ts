import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  public checkListItemTriggered = new Subject<any>();
  public taskCreateTriggered = new Subject<any>();
  public checkListCreateTriggered = new Subject<any>();

  constructor() { }

  /**
   *
   */
  public portionOfTaskCompleted(data: number) {
    this.checkListItemTriggered.next({ data });
  }

  public onTaskCreated() {
    this.taskCreateTriggered.next();
  }

  public onCheckListCreated() {
    this.checkListCreateTriggered.next();
  }
}
