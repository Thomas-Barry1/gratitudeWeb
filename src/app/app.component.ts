import { DatePipe } from '@angular/common';
import {Component, Inject} from '@angular/core';
import { ToastService } from './toast.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

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

  constructor(private datePipe: DatePipe, private toastService: ToastService){
    
  }

  submitGratitude() {
    const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    if (this.goodThing1 && this.goodThing2 && this.goodThing3) {
      const logEntry = `${this.goodThing1}, ${this.goodThing2}, ${this.goodThing3}, ${currentDateAndTime}`;
      this.journalEntries.push(logEntry);
      this.toastService.showToast('Great job! Keep spreading positivity!', "success");
    }
  }

  removeEntry(index: number) {
    this.journalEntries.splice(index, 1);
  }

}
