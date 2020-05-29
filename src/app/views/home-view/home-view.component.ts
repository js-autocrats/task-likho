import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task_model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }
  
  tasksList: Task[];

  ngOnInit(): void {

    // this.taskService.getAll()
    // .subscribe(console.log)

    this.tasksList = [
      {
        "title": "Tutorials",
        "description": "Learn MEAN stack tutorials from coursera.",
        "id": 1,
        "taskId": "123123",
        "todoList": [
          {
            "title": "React tutorials part 1",
            "description": "Learn react tutorials",
            "id": 0,
            "todoId": "ab12",
            isChecked: false,
          },
          {
            "title": "React tutorials part 2",
            "description": "Learn react tutorials",
            "id": 1,
            "todoId": "ab13",
            isChecked: false,
          },
        ]
      },
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
            "todoId": "ab12", 
            isChecked: false,
          },
          {
            "title": "React tutorials",
            "description": "Learn react tutorials",
            "id": 1,
            "todoId": "ab13",
            isChecked: false,
          },
          {
            "title": "React tutorials",
            "description": "Learn react tutorials",
            "id": 1,
            "todoId": "ab13",
            isChecked: false,
          },
        ]
      },
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
            "todoId": "ab12",
            isChecked: false,
          },
          {
            "title": "React tutorials",
            "description": "Learn react tutorials",
            "id": 1,
            "todoId": "ab13",
            isChecked: false,
          },
        ]
      }
    ];
  }

}
