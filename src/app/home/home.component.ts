import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //String Interpolation
  title = 'Angular Training';
  name = 'John';
  random_number = ""
  //Property Binding
  image = "/assets/img2.jpg";
  //Event Binding
  onClick() {
    alert("I am an Event Binding")
  }

  onClick1() {
    console.log("I am an Event Binding")
  }
  //*ngFor
  courses: Courses[] = [
    {
      courseid: "1",
      coursename: 'Angular 13'
    },
    {
      courseid: "2",
      coursename: 'React 18'
    },
    {
      courseid: "3",
      coursename: '.Net Core 6'
    },
    {
      courseid: "1",
      coursename: 'Angular 13'
    },
    {
      courseid: "2",
      coursename: 'React 18'
    },
    {
      courseid: "3",
      coursename: '.Net Core 6'
    },
    {
      courseid: "1",
      coursename: 'Angular 13'
    },
    {
      courseid: "2",
      coursename: 'React 18'
    },
    {
      courseid: "3",
      coursename: '.Net Core 6'
    }
  ]

  //ngStyle
  mycolor:string='red';

}
//class for *ngFor demo
class Courses 
{
  courseid: string|undefined;
  coursename: string | undefined;
}

