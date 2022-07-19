import { Injectable } from '@angular/core';
import { Angular } from './angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  angular:Angular[]=
  [
    {
      id:100,
      name:"Peter",
      designation:"Developer",
      phone:"569348783",
    },
    {
      id:101,
      name:"John",
      designation:"Designer",
      phone:"569343783"
    },
    {
      id:102,
      name:"Paul",
      designation:"Developer",
      phone:"432348783"
    },
    {
      id:103,
      name:"Jancy",
      designation:"Developer",
      phone:"569348783",
    },
    {
      id:104,
      name:"Jamie",
      designation:"Designer",
      phone:"569343783"
    },
    {
      id:105,
      name:"Amy",
      designation:"Developer",
      phone:"432348783"
    },
    {
      id:106,
      name:"Shaun",
      designation:"Designer",
      phone:"569343783"
    },
    {
      id:107,
      name:"Arnold",
      designation:"Developer",
      phone:"432348783"
    }
  ]

  public getdetails():any{
    const angularObservable=new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.angular);

      },1000);
    })
    return angularObservable;
  }

  constructor() { }
}
