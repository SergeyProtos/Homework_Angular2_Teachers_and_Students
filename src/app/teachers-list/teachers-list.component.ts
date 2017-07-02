import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../_services/teachers.service';

@Component({
  selector: 'teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css'],
  providers: [TeachersService]
})
export class TeachersListComponent implements OnInit {

  constructor(
    private ns:TeachersService
  ) { }

  teachers = this.ns.getTeachers();

  ngOnInit() {
  }

  removeTeacher (i) {
  this.ns.removeTeacher (i)
}

}
