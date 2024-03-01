import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

export interface DialogData {
  animal: any;
}

@Component({
  selector: 'dialog-data-component-dialog',
  templateUrl: 'dialog-data.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogDataComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

