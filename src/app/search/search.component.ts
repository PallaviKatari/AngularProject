import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  _name: any | undefined; //Angular
 
  @Input('course') //Angular
  set name(name: any) {
    this._name = name || 'Course not found';
    console.log(name)//Angular
  }
 
  get name(): string { return this._name; }

}
