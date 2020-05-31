import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.scss']
})
export class StatusViewComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  ngOnInit(): void {

  }

}
