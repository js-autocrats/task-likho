import { Component, OnInit, OnChanges, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Task } from 'src/app/models/task_model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss']
})
export class CreateTaskFormComponent implements OnInit, OnChanges, OnDestroy {

  labelList: any[] = [
    { label: 'Personal', id: 'PERSONAL' },
    { label: 'Work', id: 'WORK' },
    { label: 'Shopping', id: 'SHOPPING' },
    { label: 'Others', id: 'OTHERS' }];

  unSubscribe = new Subject();

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    labels: new FormControl(),
    dueDate: new FormControl(new Date().toISOString(), [Validators.required])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public taskData: any,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<CreateTaskFormComponent>,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService) { }

  get labelsSelected(): FormArray {
    return this.taskForm.get('labels') as FormArray;
  }

  ngOnInit(): void {

    if (this.taskData?.task?.id) {
      this.taskForm.patchValue({
        title: this.taskData?.task?.title,
        description: this.taskData?.task?.description,
        status: this.taskData?.task?.status,
        labels: this.taskData?.task?.labels,
        dueDate: new Date(this.taskData?.task?.dueDate).toISOString()
      });
    }
  }

  ngOnChanges(): void { }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    // Prevent past dates from being selected.
    return day >= new Date();
  }

  onSubmit() {
    console.log(this.taskForm?.value);
    if (!this.taskData?.task?.id) {
      this.taskService.createTask(this.taskForm?.value)
        .pipe(takeUntil(this.unSubscribe))
        .subscribe(res => {
          console.log(res);
          this.snackBar.open('Task Created SuccessFully', '', {
            duration: 2000,
          });
          this.notificationService.onTaskCreated();
          this.dialogRef.close();
        }, error => {
          this.snackBar.open('Something went wrong!', '', {
            duration: 2000,
          });
        });
    } else {
      this.taskData.task.title = this.taskForm.value.title;
      this.taskData.task.description = this.taskForm.value.description;
      this.taskData.task.status = this.taskForm.value.status;
      this.taskData.task.labels = this.taskForm.value.labels;
      this.taskData.task.dueDate = this.taskForm.value.dueDate;
      this.taskService.updateTask(this.taskData.task)
        .pipe(takeUntil(this.unSubscribe))
        .subscribe(res => {
          console.log(res);
          this.snackBar.open('Task updated SuccessFully', '', {
            duration: 2000,
          });
          this.dialogRef.close();
        }, error => {
          this.snackBar.open('Something went wrong!', '', {
            duration: 2000,
          });
        });
    }
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
