import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CheckListService } from 'src/app/services/checkList.service';

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
    private checkListService: CheckListService
  ) { }
  
    checkListForm: FormGroup;
    taskId: string;
    unSubscribe = new Subject();
  
  ngOnInit(): void {
    this.checkListForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      dueDate: new FormControl(new Date().toISOString()),
      dueTime: new FormControl('')
    });
    this.taskId = this.data?.taskId;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    // Prevent past dates from being selected.
    return day >= new Date();
  }

  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }

  onSubmit() {
    this.checkListService.createCheckList(this.taskId, this.checkListForm?.value)
    .pipe(takeUntil(this.unSubscribe))
    .subscribe(response => {
      console.log(response);
    });
  }
}

