import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  onClick() 
  {
        alert("Request Sent")
  }

  courseTypes = ['Dotnet', 'Java','Python','PHP'];
  myForm: FormGroup | any;
  username: FormControl | any;
  password: FormControl | any;
  courseType: FormControl | any;
  ngOnInit() {
    this.username = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.password = new FormControl('', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(7)]);
    this.courseType = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.myForm = new FormGroup({
      'username': this.username,
      'password': this.password,
      'courseType': this.courseType
    });
  }
}
