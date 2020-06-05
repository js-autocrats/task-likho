import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateTaskFormComponent } from '../create-task-form/create-task-form.component';
import { Task } from 'src/app/models/task_model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  // @Input() icon: string;

  @Input() task: Task;

  @Input() isEdit: boolean;

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskFormComponent, {
      data: {
        task: this.task
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
