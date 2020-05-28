import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task_model';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  tasksList: Task[];

  ngOnInit(): void {
    this.tasksList = [
      {
        "title": "Tutorials",
        "description": "Learn MEAN stack tutorials from coursera.",
        "id": 1,
        "taskId": "123123",
        "todoList": [
          {
            "title": "React tutorials",
            "description": "Learn react tutorials",
            "id": 0,
            "todoId": "ab12"
          },
          {
            "title": "React tutorials",
            "description": "Learn react tutorials",
            "id": 1,
            "todoId": "ab13"
          },
        ]
      }
    ];
  }

}
