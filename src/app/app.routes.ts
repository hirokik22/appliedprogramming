import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';

export const routes: Routes = [
   { path: 'student', component: StudentListComponent },   
   { path: 'edit-student/:id', component: EditStudentComponent },
   { path: 'add-student', component: AddStudentComponent }
];
