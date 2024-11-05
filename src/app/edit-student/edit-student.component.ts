import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit {
  @Input() id!: number
  student?: Student | null = null

  constructor(private studentService: StudentService, private router: Router) {}
  
  ngOnInit(): void {
    this.studentService.getStudent(this.id).subscribe(student => {
      this.student = student
    });
  }

  updateStudent() {
    if (this.student) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.router.navigate(["student"])
      });
    }
  }
}
