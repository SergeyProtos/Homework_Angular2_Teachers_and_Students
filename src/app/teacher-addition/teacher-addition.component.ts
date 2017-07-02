import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../_services/teachers.service'

@Component({
  selector: 'teacher-addition',
  templateUrl: './teacher-addition.component.html',
  styleUrls: ['./teacher-addition.component.css'],
  providers: [TeachersService]
})
export class TeacherAdditionComponent implements OnInit {

  constructor(
     private ns: TeachersService
  ) { }

  ngOnInit() {
  }

  addTeacher(name, surname, course){
    let teacher = {
      text1: name.value,
      text2: surname.value,
      text3: course.value
    }
    this.ns.addTeacher(teacher);
    name.value = '';
    surname.value = '';
    course.value = ''
  }

}
