import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES;
  title = COURSES[0].description;
  price = 599;
  rate = 0.67;
  course = COURSES[0];

  startDate = new Date(2000, 0, 1);
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log(' APP COMPO - btn clicked', course);
  }
}
