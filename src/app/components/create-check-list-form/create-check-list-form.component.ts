import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, MaxLengthValidator, FormBuilder } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CheckListService } from 'src/app/services/checkList.service';
import { CheckListFormType } from 'src/app/models/task_model';
import { NotificationService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-create-check-list-form',
  templateUrl: './create-check-list-form.component.html',
  styleUrls: ['./create-check-list-form.component.scss']
})
export class CreateCheckListFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateCheckListFormComponent>,
    private atp: AmazingTimePickerService,
    @Inject(MAT_DIALOG_DATA) public data,
    private checkListService: CheckListService,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) { }

  checkListForm: FormGroup;
  itemId: string;
  unSubscribe = new Subject();
  editCheckListObj: any;

  ngOnInit(): void {
    this.checkListForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      dueDate: new FormControl(new Date().toISOString()),
      dueTime: new FormControl('')
    });
    this.editCheckListObj = this.data?.checkList;

    /**
     * Based on the data the itemId will be varies between taskId & CheckListId
     */
    this.itemId = this.data.formType == CheckListFormType.addCheckList
      ? this.data.taskId
      : this.editCheckListObj?.checkListId;

    /**
     * To edit the checkList item
     **/
    this.editCheckListObj != null ? this.editCheckListItem(this.editCheckListObj) : null;
  }

  editCheckListItem({ data }) {
    this.checkListForm.patchValue({
      title: data?.items?.title,
      description: data?.items?.description,
      dueDate: new Date(data?.items?.dueDate),
      dueTime: data?.items?.dueTime
    });
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    // Prevent past dates from being selected.
    return day >= new Date();
  }


  openClockPopup() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }

  onSubmit() {
    if (this.editCheckListObj?.id) {

      this.checkListService.updateCheckList(this.editCheckListObj?.id, this.checkListForm?.value)
        .pipe(takeUntil(this.unSubscribe))
        .subscribe(response => {
          this.notificationService.onCheckListCreated();
          this.dialogRef.close();
        })
    }
    this.checkListService.createOrEditCheckList(this.itemId, this.checkListForm?.value, this.data.formType)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(response => {
        this.notificationService.onCheckListCreated();
        console.log(response);
      });
  }
}

