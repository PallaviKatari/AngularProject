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
  image = "../assets/img2.jpg";
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

  //ngClass
  //Using JavaScript object
  cssClass: CssClass = new CssClass();
  //ngClass using Array
  cssArray: string[] = ['red', 'size20','yellow','shadow'];


  //ngStyle
  mycolor: string = 'blue';
  
  getColor(country: any) {
    (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'IN':
        return 'red';
      default:
        return 'pink';
    }
  }

  people: any[] = [
    {
      "name": "John",
      "country": 'UK'
    },
    {
      "name": "Peter",
      "country": 'USA'
    },
    {
      "name": "Shaun",
      "country": 'AUS'
    },
    {
      "name": "Paul",
      "country": 'IN'
    },
    {
      "name": "Sam",
      "country": 'USA'
    }
  ];
}
//class for *ngFor demo
class Courses {
  courseid: string | undefined;
  coursename: string | undefined;
}

//ngClass Using JavaScript object
class CssClass {
  red: boolean = true;
  size20: boolean = true;
  yellow:boolean=true;
  shadow:boolean=true;
}


