import { Component, OnInit, Input } from '@angular/core';
import { Task, CheckListFormType } from 'src/app/models/task_model';
import { MatDialog } from '@angular/material/dialog';
import { CreateCheckListFormComponent } from '../create-check-list-form/create-check-list-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/services/notifications.service';
import { TaskService } from 'src/app/services/task.service';

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
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    let totalCountOfCheckListsForATask: number = 0;

    this.task?.checkListStats != null
      ? totalCountOfCheckListsForATask = this?.task?.checkListStats[0]?.checkListId?.total
      : null;

    try {
      this.singleCheckListPartInTask = (100.0 / totalCountOfCheckListsForATask);
    } catch (e) {
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
    const taskId = this.task?.taskId != null ? this.task?.taskId : this.task?.id;
    const dialogRef = this.dialog.open(CreateCheckListFormComponent, {
      width: '600px',
      data: { taskId: taskId, formType: CheckListFormType.addCheckList },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Check list is created successfully', '', {
          duration: 2000,
        })
      }
    });
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id)
      .pipe()
      .subscribe(res => {
        if (res) {
          this.snackBar.open('Task Deleted!', '', {
            duration: 2000,
          });
        }
      });
  }

}
