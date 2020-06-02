import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task_model';
import { MatDialog } from '@angular/material/dialog';
import { CreateCheckListFormComponent } from '../create-check-list-form/create-check-list-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss']
})
export class TaskTileComponent implements OnInit {


  @Input() task: Task;
  singleCheckListPartInTask: number = 0;
  portionOfTaskCompleted: number = 0;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private notification: NotificationService,
  ) { }

  ngOnInit(): void {
    let totalCountOfCheckListsForATask: number = 0;

    this.task?.checkListStats != null 
      ? totalCountOfCheckListsForATask = this?.task?.checkListStats[0]?.checkListId?.total 
      : null;
    
    try {
      this.singleCheckListPartInTask = ( 100.0 / totalCountOfCheckListsForATask );
    } catch(e) {
      console.log(e);
    }

    //Event change receiver to get the portion of task completed.
    this.notification.checkListItemTriggered.subscribe(res => {
      this.portionOfTaskCompleted = this.portionOfTaskCompleted + res?.data;
    });
  }

  /**
   * Calling dialog to create a checklist
   */
  addACheckList() {
    const dialogRef = this.dialog.open(CreateCheckListFormComponent,{
      width: '600px',
      data: this.task?.taskId,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.snackBar.open('Check list is created successfully','', {
          duration: 2000,
        })
      }
    });
  }

}
