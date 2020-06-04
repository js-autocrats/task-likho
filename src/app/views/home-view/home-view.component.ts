import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { Task } from 'src/app/models/task_model';
import { TaskService } from 'src/app/services/task.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit, OnDestroy {

  tasksList: Task[];
  filteredTaskList: Task[];
  unSubscribe = new Subject();

  constructor(
    private taskService: TaskService
  ) {
    this.taskService.getAll()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(res => {
        this.tasksList = res;
        this.filteredTaskList = this.tasksList;
      }
    );
  }

  ngOnInit(): void {
  }

  onTaskFilter(value): any {
    const title = value.toLocaleString();
    this.filteredTaskList = this.tasksList?.filter(option => option?.title.toLocaleString().includes(title));
    if (this.filteredTaskList.length === 0) {
      this.filteredTaskList = this.tasksList;
    }
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
