import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Task } from 'src/app/models/task_model';
import { TaskService } from 'src/app/services/task.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit, OnDestroy {

  constructor(
    private taskService: TaskService
  ) { }

  tasksList: Task[];
  unSubscribe = new Subject();

  ngOnInit(): void {
    this.taskService.getAll()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(res => {
        this.tasksList = res;
      }
    );
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
