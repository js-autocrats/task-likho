import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  constructor(private taskService: TaskService, public dialogRef: MatDialogRef<CreateTaskFormComponent>, ) { }

  get labelsSelected(): FormArray {
    return this.taskForm.get('labels') as FormArray;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    // Prevent past dates from being selected.
    return day >= new Date();
  }

  onSubmit() {
    console.log(this.taskForm.value);
    this.taskService.createTask(this.taskForm.value)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(res => {
        console.log(res)
        this.dialogRef.close();
      });
  }
  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
