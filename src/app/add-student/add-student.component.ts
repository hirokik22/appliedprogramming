import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StudentService } from '../services/student.service';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-add-student',
  standalone: true,
  providers: [provideMomentDateAdapter(
    {
      parse: {
        dateInput: ['DD-MM-YYYY'],
      },
      display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
      },
    }, 
    { useUtc: true })
  ],
  imports: [MatDatepickerModule, MatMomentDateModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  constructor(private studentService: StudentService) { }

  firstName: FormControl = new FormControl('', [Validators.required]);
  lastName: FormControl = new FormControl('', [Validators.required]);
  studyProgram: FormControl = new FormControl('1', [Validators.pattern('\\d+')]);
  dob: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  phone: FormControl = new FormControl('', [Validators.required, Validators.pattern('\\d{8}')]);

  studentFormGroup: FormGroup = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    studyProgram: this.studyProgram,
    dob: this.dob,
    email: this.email,
    phone: this.phone
  });

  addStudent() {
    this.studentService.addStudent({
      id: 0,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      studyProgramId: this.studyProgram.value,
      dob: this.dob.value,
      email: this.email.value,
      phone: this.phone.value
    }).subscribe({
      next: () => console.log('Done'),
      error: (err) => console.error('Somethig went wrong: ' + err)
    })
  }
}
