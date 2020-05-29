import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task_model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss']
})
export class TaskTileComponent implements OnInit {
clear
  @Input() task: Task;
  isChecked: boolean = false;
  taskCompletedInPercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  OnChange(event: MatCheckboxChange, index: number){
    this.task.todoList[index].isChecked = event.checked;
    this.taskCompletedInPercentage = this.taskCompletedInPercentage + (100 / this.task.todoList.length);
    if (this.task.todoList[index].isChecked) {
      let temp = this.task.todoList[index];
      _.pull(this.task.todoList,temp);
      this.task.todoList.push(temp);
    }
  }

}