import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Task } from 'src/app/models/task_model';

@Component({
  selector: 'app-search-filter-task',
  templateUrl: './search-filter-task.component.html',
  styleUrls: ['./search-filter-task.component.scss']
})
export class SearchFilterTaskComponent implements OnInit, OnChanges {


  @Input() taskList: any[] = [];

  @Output() taskFilter = new EventEmitter();

  private _taskDetails = [];


  set _setTaskDetails(c) {
    this._taskDetails = c.currentValue;
  }




  get _getTaskDetails() {
    return this._taskDetails;
  }

  changeLog: any[] = [];

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnInit(): void {
    this.myControl.valueChanges.subscribe(value => {
      this.taskFilter.emit(value);
    });
  }


  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes)
    for (let p in changes) {
      if (p.length) {
        let c = changes[p];
        this._taskDetails = c.currentValue;
        // c.currentValue?.forEach(task => {
        //   this._taskDetails.push(task?.title);
        // });
      }
    }
  }


  private _filter(value: string): any[] {
    const filterValue = value?.toLowerCase();
    return this._getTaskDetails?.filter(task => task?.title?.toLowerCase().indexOf(filterValue) === 0);
  }

}
