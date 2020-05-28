import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task_model';

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss']
})
export class TaskTileComponent implements OnInit {

  @Input() task: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.task);
  }

}
