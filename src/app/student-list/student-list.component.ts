import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentComponent } from '../student/student.component';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((listOfStudents) => {
      this.students = listOfStudents;
    })
  }

  students: Student[] = [];
}
