import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = 'http://localhost:5016/api'; 
  constructor(private httpClient: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl + "/student");
  }

  deleteStudent(id: number) : Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/student/${id}`);
  }

  getStudent(id: number) : Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseUrl}/student/${id}`);
  }

  updateStudent(student: Student) : Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/student`, student);
  }

  addStudent(student: Student) : Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/student`, student);
  }
}
