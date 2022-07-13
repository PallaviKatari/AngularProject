import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="John";

  //*ngFor
  users: Users[] = [
    {
      userid: "1",
      username: 'John'
    },
    {
      userid: "2",
      username: 'Peter'
    },
    {
      userid: "3",
      username: 'Sam'
    },
    {
      userid: "4",
      username: 'Shaun'
    },
    {
      userid: "5",
      username: 'Jancy'
    }
    
  ]


}

//class for *ngFor demo
class Users {
  userid: string | undefined;
  username: string | undefined;
}
