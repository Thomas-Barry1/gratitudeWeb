import { DatePipe } from '@angular/common';
import {Component, Inject} from '@angular/core';
import {DialogDataComponent} from './dialog-data/dialog-data.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ApiService } from './api.service';
import { Affirmation } from './affirmation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gratitudeWeb';
  goodThing1: string = '';
  goodThing2: string = '';
  goodThing3: string = '';
  successMessage: string = '';
  journalEntries: string[] = [];
  
  posts: Affirmation | { affirmation: any; }[] = [];

  constructor(private datePipe: DatePipe, private dialog: MatDialog, private apiService: ApiService){

    this.apiService.getList().subscribe({
      next: (data) => {
          this.posts = data;
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })      
  }

  submitGratitude() {
    const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    if (this.goodThing1 && this.goodThing2 && this.goodThing3) {
      const logEntry = `${this.goodThing1}, ${this.goodThing2}, ${this.goodThing3}, ${currentDateAndTime}`;
      this.journalEntries.push(logEntry);

      console.log(this.posts);

      const affirmation = this.posts;
      this.dialog.open(DialogDataComponent, {
        data: {
          animal: affirmation,
        },
      });
    }
  }

  removeEntry(index: number) {
    this.journalEntries.splice(index, 1);
  }

}
