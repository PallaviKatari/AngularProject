import { Injectable } from '@angular/core';
import { Angular } from './angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReactServiceService {

  angular:Angular[]=
  [
    {
      id:100,
      name:"Jhonny",
      designation:"Developer",
      phone:"569348783",
    },
    {
      id:101,
      name:"Daisy",
      designation:"Designer",
      phone:"569343783"
    },
    {
      id:102,
      name:"Dwayne",
      designation:"Developer",
      phone:"432348783"
    },
    {
      id:103,
      name:"Anson",
      designation:"Developer",
      phone:"569348783",
    },
    {
      id:104,
      name:"Antony",
      designation:"Designer",
      phone:"569343783"
    },
    {
      id:105,
      name:"Carly",
      designation:"Developer",
      phone:"432348783"
    },
    {
      id:106,
      name:"Lea",
      designation:"Designer",
      phone:"569343783"
    },
    {
      id:107,
      name:"Murphy",
      designation:"Developer",
      phone:"432348783"
    }
  ]

  public getdetails():any{
    const angularObservable=new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.angular);

      },500);
    })
    return angularObservable;
  }

  constructor() { }
}
