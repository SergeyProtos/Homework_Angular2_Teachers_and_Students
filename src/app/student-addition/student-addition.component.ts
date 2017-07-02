import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../_services/students.service';

@Component({
  selector: 'student-addition',
  templateUrl: './student-addition.component.html',
  styleUrls: ['./student-addition.component.css'],
  providers: [StudentsService]
})
export class StudentAdditionComponent implements OnInit {

  constructor(
    private ns:StudentsService
  ) { }

  ngOnInit() {
  }

  addStudent(name, surname, course){
    let student = {
      text1: name.value,
      text2: surname.value,
      text3: course.value
    }
    this.ns.addStudent(student);
    name.value = '';
    surname.value = '';
    course.value = ''
}
}
