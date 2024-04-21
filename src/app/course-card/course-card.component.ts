import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from '../../db-data';

@Component({
  selector: 'app-course-card',
  // standalone: true,
  // imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnInit{
  @Input()
  course!: Course;

  @Input({ required: true })
  index!: number;
  
  @Output()
  courseSelected = new EventEmitter<Course>()

  constructor(){}
  ngOnInit(): void {
  }


  onCourseViewed() {
    console.log(" course card COMPO - btn clicked")
    this.courseSelected.emit(this.course)
  }
}
