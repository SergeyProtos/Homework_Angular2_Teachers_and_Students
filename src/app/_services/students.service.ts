import { Injectable } from '@angular/core';
import { STUDENTS } from '../STUDENTS';

@Injectable()
export class StudentsService {

  getStudents() {
    return STUDENTS;
  }

  addStudent(student) {
    STUDENTS.push(student);
  }

  removeStudent(i) {
    STUDENTS.splice(i,1);
  }

}
