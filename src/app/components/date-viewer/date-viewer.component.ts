import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-viewer',
  templateUrl: './date-viewer.component.html',
  styleUrls: ['./date-viewer.component.scss']
})
export class DateViewerComponent implements OnInit {

  @Input() date: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
