import { Component, Input } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() student!: Student 

  constructor(private studentService: StudentService, private router: Router) {

  }

  deleteStudent() {
    console.log('Call delete function');
    this.studentService.deleteStudent(this.student.id).subscribe();
  }

  editStudent(id: number) {
    this.router.navigate(["edit-student", id])
  }
}
