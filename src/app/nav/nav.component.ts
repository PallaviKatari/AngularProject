import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courseSelected:string= ''; //Angular
 
  AddCourse(courseId: string): void {
    if (!courseId) { return; }
    this.courseSelected = courseId; //Angular
    console.log(courseId) //Angular
  }
}
