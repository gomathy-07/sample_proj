import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

  fn:any;
  email:any;
  sub:any;
  password:any;
  constructor(private appservice:AppserviceService) { }

  ngOnInit() 
  {
    this.fn=this.appservice.putdetails();
    console.log(this.fn);
    this.email=this.fn.email;
    this.sub=this.fn.sub;
    this.password=this.fn.password;
    }
  }
  


