import { Component, OnInit } from '@angular/core';
import { Angular } from '../angular';
import { ReactServiceService } from '../react-service.service';
@Component({
  selector: 'app-react-course',
  templateUrl: './react-course.component.html',
  styleUrls: ['./react-course.component.css']
})
export class ReactCourseComponent implements OnInit {

  angularcourse:Angular[]=[];

  constructor(private angularservice:ReactServiceService) { }

  ngOnInit(): void {
    const angularObservable=this.angularservice.getdetails();
    angularObservable.subscribe((details:Angular[])=>{
      this.angularcourse=details;
    })

  }

}

