import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss']
})
export class CreateTaskFormComponent implements OnInit, OnChanges {


  labelList: any[] = [
    { label: 'Personal', value: 'PERSONAL' },
    { label: 'Work', value: 'WORK' },
    { label: 'Shopping', value: 'SHOPPING' },
    { label: 'Others', value: 'OTHERS' }];


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    // Prevent Saturday and Sunday from being selected.
    return day >= new Date();
  }

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    labels: new FormControl(),
    dueDate: new FormControl(new Date().toISOString(), [Validators.required])
  });

  constructor() { }

  get labelsSelected(): FormArray {
    return this.taskForm.get('labels') as FormArray;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }

  onSubmit() {
    console.log(this.taskForm.value);
  }
}
