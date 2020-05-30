import { Component, OnInit, Input } from '@angular/core';
import { Labels } from 'src/app/models/task_model';

@Component({
  selector: 'app-labels-view',
  templateUrl: './labels-view.component.html',
  styleUrls: ['./labels-view.component.scss']
})
export class LabelsViewComponent implements OnInit {

  @Input() labels: Labels;
  constructor() { }

  ngOnInit(): void {
  }

}
