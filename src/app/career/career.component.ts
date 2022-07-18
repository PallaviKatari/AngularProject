import { Component, OnInit } from '@angular/core';
import * as data from '../data/sample.json';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
 
export class CareerComponent implements OnInit {

  var1: any|undefined;

  constructor(public httpClient: HttpClient)
  {

  }
  readData(){
  this.httpClient.get('https://fakestoreapi.com/users').subscribe((resp)=>{
  this.var1 = resp;
  });
  }

  ngOnInit(): void {
  }
  career: any = (data as any).default;
  
}
