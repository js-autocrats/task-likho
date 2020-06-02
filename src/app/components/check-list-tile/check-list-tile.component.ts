import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CheckList } from 'src/app/models/task_model';
import { NotificationService } from 'src/app/services/notifications.service';

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
    private notifier: NotificationService
  ) { }

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
}
