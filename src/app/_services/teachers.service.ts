import { Injectable } from '@angular/core';
import { TEACHERS } from '../TEACHERS';

@Injectable()
export class TeachersService {

  getTeachers() {
    return TEACHERS;
  }

  addTeacher(teacher) {
    TEACHERS.push(teacher);
  }

  removeTeacher(i) {
    TEACHERS.splice(i,1);
  }

}
