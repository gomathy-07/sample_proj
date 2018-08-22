import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
value;
  constructor() { }
  getdetails(email:string,sub:string,password:string)
  {
    this.value={
      email:email,
      sub:sub,
      password:password
    }
  }
  putdetails()
  {
    return this.value;
  }
}
