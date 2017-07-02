import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../_services/students.service';

@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
  providers: [StudentsService]
})
export class StudentsListComponent implements OnInit {

  constructor(
    private ns:StudentsService
  ) { }

  students = this.ns.getStudents();

  ngOnInit() {
  }

  removeStudent (i) {
  this.ns.removeStudent (i)
}

}
