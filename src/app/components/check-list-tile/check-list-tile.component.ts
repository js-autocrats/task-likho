import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CheckList, CheckListFormType } from 'src/app/models/task_model';
import { NotificationService } from 'src/app/services/notifications.service';
import { CheckListService } from 'src/app/services/checkList.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateCheckListFormComponent } from '../create-check-list-form/create-check-list-form.component';

@Component({
  selector: 'app-check-list-tile',
  templateUrl: './check-list-tile.component.html',
  styleUrls: ['./check-list-tile.component.scss']
})
export class CheckListTileComponent implements OnInit {
  
  @Input() checkListItem: CheckList;
  @Input() shareOfCheckListInTask: number;
  portionOfTaskComplete: number = 0;
  
  constructor(
    private notifier: NotificationService,
    private checkListService: CheckListService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ) { }
    
  unSubscribe = new Subject();
  ngOnInit(): void {
  }

  /**
   * 
   * @param event checkbox click event
   * @param checkListItem passing the checklist obj
   */
  OnChange(event: MatCheckboxChange) {
    this.checkListItem.isChecked = event.checked;
    if (event.checked) {
      this.portionOfTaskComplete = this.portionOfTaskComplete + this.shareOfCheckListInTask;
      //Event change trigger
      this.notifier.portionOfTaskCompleted(this.portionOfTaskComplete);

      /// To move the completed checklist to end of the array from its current position.

      // let temp = checkListItem;
      // _.pull(this.task.checkList,temp);
      // this.task.checkList.push(temp);
    } else {
      this.portionOfTaskComplete = this.portionOfTaskComplete - this.shareOfCheckListInTask;
      //Event change trigger
      this.notifier.portionOfTaskCompleted(this.portionOfTaskComplete);
    }
  }

  /**
   * @param checListItem checkListObj to edit
   */
  editCheckList(checListItem: CheckList) {
    const dialogRef = this.dialog.open(CreateCheckListFormComponent,{
      width: '600px',
      data: { checkList: this.checkListItem, formType: CheckListFormType.editCheckList},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.snackBar.open('Check list is created successfully','', {
          duration: 2000,
        })
      }
    });
  }

  /**
   * CheckList id to delete it completely
   * @param checkListId 
   */
  deleteACheckList(checkListId: string) {
    this.checkListService.deleteACheckList(checkListId).subscribe(response => {
      if(response.code == 200){
        this.snackBar.open('checkList delete successfully !', 'OK', {duration: 2000});
      }
    });
  }

}
