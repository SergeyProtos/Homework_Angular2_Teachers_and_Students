import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeacherAdditionComponent } from './teacher-addition/teacher-addition.component';
import { StudentsComponent } from './students/students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAdditionComponent } from './student-addition/student-addition.component';

@NgModule({
  declarations: [AppComponent, TeachersComponent, TeachersListComponent, TeacherAdditionComponent, 
  StudentsComponent, StudentsListComponent, StudentAdditionComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
