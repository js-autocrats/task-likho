import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task_model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as _ from 'lodash';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss']
})
export class TaskTileComponent implements OnInit {

  @Input() task: Task;
  taskCompletedInPercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  OnChange(event: MatCheckboxChange, index: number){
    this.task.todoList[index].isChecked = event.checked;
    if (event.checked) {
      this.taskCompletedInPercentage = this.taskCompletedInPercentage + (100 / this.task.todoList.length);

      /// To move the completed checklist to end of the array from its current position.

      // let temp = this.task.todoList[index];
      // _.pull(this.task.todoList,temp);
      // this.task.todoList.push(temp);
    } else {
      this.taskCompletedInPercentage = this.taskCompletedInPercentage - (100 / this.task.todoList.length);
    }
  }

}
