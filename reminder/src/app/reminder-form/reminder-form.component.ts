import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.css']
})
export class ReminderFormComponent {
 reminderForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reminderForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['', Validators.required],
      method: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reminderForm.valid) {
      this.http.post('http://localhost:3000/api/reminders', this.reminderForm.value)
        .subscribe({
          next: () => {
            this.successMessage = 'Reminder saved successfully!';
            this.errorMessage = '';
            this.reminderForm.reset();
          },
          error: (err) => {
            this.errorMessage = 'Failed to save reminder. Try again.';
            this.successMessage = '';
          }
        });
    }
  }


  dateInputType: string = 'text';

onDateBlur() {
  if (!this.reminderForm.get('date')?.value) {
    this.dateInputType = 'text';
  }
}

timeInputType: string = 'text';

onTimeBlur() {
  if (!this.reminderForm.get('time')?.value) {
    this.timeInputType = 'text';
  }
}


}
